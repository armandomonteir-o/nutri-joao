import "../styles/globals.css"
import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import JsonLd from "@/components/JsonLd"
import { generateFaqSchema } from "@/components/StructuredData/FAQPage"
import { generatePhysicianSchema } from "@/components/StructuredData/PhysicianSchema.tsx"
import generateRatingSchema from "@/components/StructuredData/RatingSchema"
import { fetchRatingsFromGoogleForm } from "@/services/googleSheetsService"
import { generateServiceSchemas } from "@/components/StructuredData/ServiceSchema"
import { RatingData } from "@/types/ratingData"

export const metadata: Metadata = {
	title: "Nutricionista em Angra dos Reis - Consultoria SlimMind | João Paulo",
	description:
		"Transforme sua saúde com João Paulo, nutricionista em Angra dos Reis. Foco em emagrecimento, transtornos alimentares e hipertrofia. Agende sua consulta!",
}

const isProd = process.env.NODE_ENV === "production"

function getURL(isProd: boolean): string {
	if (isProd) {
		return "https://www.consultasslimmind.com.br"
	} else return "http://localhost:3000"
}

const siteUrl = getURL(isProd)

export default async function Home() {
	const ratingData: RatingData = await fetchRatingsFromGoogleForm()

	const physicianId = `${siteUrl}#physician`

	const faqSchema = generateFaqSchema()
	const physicianSchema = generatePhysicianSchema(siteUrl)
	const ratingSchema = generateRatingSchema(ratingData, physicianId)
	const serviceSchemas = generateServiceSchemas(siteUrl, physicianId)

	return (
		<>
			<JsonLd data={faqSchema} />
			<JsonLd data={physicianSchema} />
			{ratingSchema && <JsonLd data={ratingSchema} />}

			{serviceSchemas.map((schema, index) => (
				<JsonLd key={`service-${index}`} data={schema} />
			))}

			<PageWrapper initialRatingData={ratingData} />
		</>
	)
}
