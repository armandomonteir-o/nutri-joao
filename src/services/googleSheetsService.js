import axios from "axios"

/**
 * Serviço para acessar e processar dados de avaliações de um Google Form
 * através da API do Google Sheets
 */
export async function fetchRatingsFromGoogleForm() {
	try {
		// Você precisará substituir esta URL pelo endpoint real da sua planilha
		// Este é um exemplo usando a API pública do Google Sheets
		// Format: https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID/values/RANGE?key=API_KEY

		// Para desenvolvimento, podemos usar um mock
		const useMock = process.env.NODE_ENV === "development"

		if (useMock) {
			// Retorna dados mockados para desenvolvimento
			return {
				averageRating: 4.7,
				totalReviews: 128,
			}
		}

		// Para produção, conecta à API real
		const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID
		const API_KEY = process.env.GOOGLE_API_KEY
		const RANGE = "Respostas!A2:E" // Ajuste conforme a estrutura da sua planilha

		const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`

		const response = await axios.get(url)
		const rows = response.data.values

		if (!rows || rows.length === 0) {
			throw new Error("Nenhum dado encontrado na planilha")
		}

		// Assumindo que a coluna de avaliação é a coluna 3 (índice 2)
		// Ajuste conforme a estrutura real do seu formulário
		const ratingColumnIndex = 2

		// Calcula a média das avaliações
		let totalRating = 0
		let validRatings = 0

		rows.forEach((row) => {
			if (row.length > ratingColumnIndex && row[ratingColumnIndex]) {
				const rating = parseFloat(row[ratingColumnIndex])
				if (!isNaN(rating)) {
					totalRating += rating
					validRatings++
				}
			}
		})

		const averageRating =
			validRatings > 0 ? (totalRating / validRatings).toFixed(1) : 0

		return {
			averageRating: parseFloat(averageRating),
			totalReviews: validRatings,
		}
	} catch (error) {
		console.error("Erro ao buscar dados do Google Sheets:", error)
		return {
			averageRating: 0,
			totalReviews: 0,
			error: error.message,
		}
	}
}
