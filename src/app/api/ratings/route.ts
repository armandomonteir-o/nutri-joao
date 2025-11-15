import { fetchRatingsFromGoogleForm } from "@/services/googleSheetsService"
import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { RatingData } from "@/types/ratingData"

export async function GET(): Promise<NextResponse<RatingData>> {
	try {
		// Verifica o referrer de forma assíncrona
		const headersList = await headers()
		const referer = headersList.get("referer")

		// Em produção, só aceita requisições do próprio domínio
		if (process.env.NODE_ENV === "production") {
			const allowedDomains = [
				process.env.NEXT_PUBLIC_SITE_URL,
				"https://www.consultasslimmind.com.br",
			].filter(Boolean)

			if (
				!referer ||
				!allowedDomains.some((domain) =>
					referer.startsWith(domain as string)
				)
			) {
				return NextResponse.json(
					{
						error: "Acesso não autorizado",
						averageRating: 0,
						totalReviews: 0,
					},
					{ status: 403 }
				)
			}
		}

		const ratingsData = await fetchRatingsFromGoogleForm()

		return NextResponse.json(ratingsData, {
			headers: {
				"Cache-Control":
					"public, s-maxage=60, stale-while-revalidate=300",
				"Content-Security-Policy":
					"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';",
				"X-Content-Type-Options": "nosniff",
				"X-Frame-Options": "DENY",
				"X-XSS-Protection": "1; mode=block",
				"Referrer-Policy": "strict-origin-when-cross-origin",
			},
		})
	} catch (error) {
		const errorMessage =
			error instanceof Error
				? error.message
				: "Um erro inesperado ocorreu."

		console.error("Erro fatal na API de avaliações:", {
			message: errorMessage,
			stack: error instanceof Error ? error.stack : undefined,
		})

		return NextResponse.json(
			{
				error: "Falha ao buscar as avaliações",
				details: errorMessage,
				averageRating: 0,
				totalReviews: 0,
			},
			{
				status: 500,
				headers: {
					"Cache-Control": "no-store",
				},
			}
		)
	}
}
