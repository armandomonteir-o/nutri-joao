import { fetchRatingsFromGoogleForm } from "@/services/googleSheetsService"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		const ratingsData = await fetchRatingsFromGoogleForm()
		return NextResponse.json(ratingsData)
	} catch (error) {
		console.error("Erro detalhado na API de avaliações:", {
			message: error.message,
			stack: error.stack,
			response: error.response?.data,
		})

		return NextResponse.json(
			{
				error: "Falha ao buscar as avaliações",
				details: error.message,
			},
			{ status: 500 }
		)
	}
}
