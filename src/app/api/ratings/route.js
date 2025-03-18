import { fetchRatingsFromGoogleForm } from "@/services/googleSheetsService"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		const ratingsData = await fetchRatingsFromGoogleForm()

		return NextResponse.json(ratingsData)
	} catch (error) {
		console.error("Erro na API de avaliações:", error)
		return NextResponse.json(
			{ error: "Falha ao buscar as avaliações" },
			{ status: 500 }
		)
	}
}
