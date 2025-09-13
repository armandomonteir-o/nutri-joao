import axios from "axios"

/**
 * Define a estrutura do objeto de retorno para os dados de avaliação.
 * Isso garante que qualquer parte do código que use esta função
 * saiba exatamente quais propriedades esperar.
 */
export interface RatingsData {
	averageRating: number
	totalReviews: number
	error?: string
}

/**
 * Serviço para acessar e processar dados de avaliações de um Google Form
 * através da API do Google Sheets
 */

export async function fetchRatingsFromGoogleForm(): Promise<RatingsData> {
	const isProd = process.env.NODE_ENV === "production"

	if (!process.env.GOOGLE_SPREADSHEET_ID || !process.env.GOOGLE_API_KEY) {
		if (isProd) {
			// Em produção, isso é um erro real de configuração.
			console.error(
				"Configuração de ambiente do Google Sheets incompleta."
			)
			return {
				error: "Erro de configuração do servidor.",
				averageRating: 0,
				totalReviews: 0,
			}
		}
		// fallback.
		console.warn(
			"Variáveis de ambiente do Google Sheets não configuradas, usando dados mock."
		)
		return {
			averageRating: 4.7,
			totalReviews: 129,
		}
	}

	if (!/^[A-Za-z0-9-_]+$/.test(process.env.GOOGLE_SPREADSHEET_ID)) {
		console.error("ID da planilha inválido.")
		return {
			error: "ID da planilha inválido.",
			averageRating: 0,
			totalReviews: 0,
		}
	}

	try {
		const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID
		const API_KEY = process.env.GOOGLE_API_KEY
		const RANGE = "B2:G" // Colunas B até G (6 avaliações numéricas)

		const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`

		interface GoogleSheetResponse {
			values: string[][]
		}

		if (!isProd) {
			console.log("Debug - URL da API:", url)
		}

		const { data } = await axios.get<GoogleSheetResponse>(url, {
			timeout: 5000,
			headers: {
				Accept: "application/json",
				"User-Agent": "nutri-jampa/1.0",
			},
		})

		const rows = data.values

		if (!rows || rows.length === 0) {
			console.warn("Nenhum dado encontrado na planilha.")
			return {
				error: "Ainda não temos avaliações disponíveis. Volte em breve!",
				averageRating: 0,
				totalReviews: 0,
			}
		}

		let somaTodasAvaliacoes = 0
		let totalRespostas = 0

		rows.forEach((row: string[]) => {
			if (row.length >= 6) {
				const somaAvaliacoesResposta = row
					.slice(0, 6) // Pega apenas as 6 primeiras colunas
					.map((val) => parseInt(val, 10)) // Adiciona o radix 10
					.filter(
						(rating) =>
							!isNaN(rating) && rating >= 1 && rating <= 5
					)
					.reduce((sum, current) => sum + current, 0)

				// Apenas considera a linha se todas as 6 avaliações forem válidas
				if (
					somaAvaliacoesResposta > 0 &&
					row
						.slice(0, 6)
						.every((val) => !isNaN(parseInt(val, 10)))
				) {
					const mediaResposta = somaAvaliacoesResposta / 6
					somaTodasAvaliacoes += mediaResposta
					totalRespostas++
				}
			}
		})

		const mediaGeral =
			totalRespostas > 0
				? parseFloat(
						(somaTodasAvaliacoes / totalRespostas).toFixed(1)
				  )
				: 0

		return {
			averageRating: mediaGeral,
			totalReviews: totalRespostas,
		}
	} catch (error) {
		console.error("Erro detalhado no serviço de Google Sheets:", error)

		if (axios.isAxiosError(error) && error.response) {
			const status = error.response.status
			if (status === 403) {
				return {
					error: "Não foi possível acessar as avaliações no momento. Por favor, tente novamente mais tarde.",
					averageRating: 0,
					totalReviews: 0,
				}
			}
			if (status === 404) {
				return {
					error: "Sistema de avaliações temporariamente indisponível. Estamos trabalhando para resolver.",
					averageRating: 0,
					totalReviews: 0,
				}
			}
		}

		// Fallback
		return {
			error: "Ops! Algo deu errado ao carregar as avaliações. Tente novamente em alguns minutos.",
			averageRating: 0,
			totalReviews: 0,
		}
	}
}
