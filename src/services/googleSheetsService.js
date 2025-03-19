import axios from "axios"

/**
 * Serviço para acessar e processar dados de avaliações de um Google Form
 * através da API do Google Sheets
 */
export async function fetchRatingsFromGoogleForm() {
	try {
		// Verifica ambiente de produção
		const isProd = process.env.NODE_ENV === "production"

		// Para desenvolvimento, podemos usar um mock se as variáveis de ambiente não estiverem definidas
		if (
			!process.env.GOOGLE_SPREADSHEET_ID ||
			!process.env.GOOGLE_API_KEY
		) {
			if (isProd) {
				throw new Error("Configuração de ambiente incompleta")
			}
			console.warn(
				"Variáveis de ambiente do Google Sheets não configuradas, usando dados mock"
			)
			return {
				averageRating: 4.7,
				totalReviews: 128,
			}
		}

		// Validação básica das variáveis de ambiente
		if (!/^[A-Za-z0-9-_]+$/.test(process.env.GOOGLE_SPREADSHEET_ID)) {
			throw new Error("ID da planilha inválido")
		}

		// Conecta à API do Google Sheets
		const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID
		const API_KEY = process.env.GOOGLE_API_KEY
		const RANGE = "B2:G" // Colunas B até G (6 avaliações numéricas)

		const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`

		// Em produção, não logamos a URL completa com a chave API
		if (isProd) {
			console.log("Acessando Google Sheets API...")
		} else {
			console.log("Debug - URL da API:", url)
		}

		try {
			const response = await axios.get(url, {
				timeout: 5000, // Timeout de 5 segundos
				headers: {
					Accept: "application/json",
					"User-Agent": "nutri-jampa/1.0",
				},
			})
			const rows = response.data.values

			if (!rows || rows.length === 0) {
				console.error("Nenhum dado encontrado na planilha")
				return {
					error: "Ainda não temos avaliações disponíveis. Volte em breve!",
					averageRating: 0,
					totalReviews: 0,
				}
			}

			let somaTodasAvaliacoes = 0
			let totalRespostas = 0

			// Para cada linha (resposta)
			rows.forEach((row) => {
				if (row.length >= 6) {
					let somaAvaliacoesResposta = 0
					let avaliacoesValidas = 0

					for (let i = 0; i < 6; i++) {
						const rating = parseInt(row[i])
						if (
							!isNaN(rating) &&
							rating >= 1 &&
							rating <= 5
						) {
							somaAvaliacoesResposta += rating
							avaliacoesValidas++
						}
					}

					if (avaliacoesValidas === 6) {
						const mediaResposta = somaAvaliacoesResposta / 6
						somaTodasAvaliacoes += mediaResposta
						totalRespostas++
					}
				}
			})

			const mediaGeral =
				totalRespostas > 0
					? parseFloat(
							(
								somaTodasAvaliacoes / totalRespostas
							).toFixed(1)
					  )
					: 0

			return {
				averageRating: mediaGeral,
				totalReviews: totalRespostas,
			}
		} catch (error) {
			if (error.response) {
				console.error("Erro técnico ao acessar dados:", {
					status: error.response.status,
					data: error.response.data,
				})
			} else {
				console.error("Erro técnico:", error)
			}

			if (error.response?.status === 403) {
				return {
					error: "Não foi possível acessar as avaliações no momento. Por favor, tente novamente mais tarde.",
					averageRating: 0,
					totalReviews: 0,
				}
			} else if (error.response?.status === 404) {
				return {
					error: "Sistema de avaliações temporariamente indisponível. Estamos trabalhando para resolver.",
					averageRating: 0,
					totalReviews: 0,
				}
			} else {
				return {
					error: "Desculpe, não foi possível carregar as avaliações agora. Por favor, atualize a página.",
					averageRating: 0,
					totalReviews: 0,
				}
			}
		}
	} catch (error) {
		console.error("Erro técnico interno:", error)

		return {
			error: "Ops! Algo deu errado ao carregar as avaliações. Tente novamente em alguns minutos.",
			averageRating: 0,
			totalReviews: 0,
		}
	}
}
