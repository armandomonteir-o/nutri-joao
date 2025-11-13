import "../styles/globals.css"
import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import JsonLd from "@/components/JsonLd"
import { generateFaqSchema } from "@/components/StructuredData/FAQPage"
import { generatePhysicianSchema } from "@/components/StructuredData/PhysicianSchema.tsx"

export const metadata: Metadata = {
	title: "Nutricionista em Angra dos Reis - Consultoria SlimMind | João Paulo",
	description:
		"Transforme sua saúde com João Paulo, nutricionista em Angra dos Reis. Foco em emagrecimento, transtornos alimentares e hipertrofia. Agende sua consulta!",
}

const isProd = process.env.NODE_ENV === "production"

function getURL(isProd: boolean): string {
	if (isProd) {
		return "https://www.consultasslimmind.com.br/"
	} else return "http://localhost:3000/"
}

const siteUrl = getURL(isProd)

export default function Home() {
	const faqSchema = generateFaqSchema()
	const physicianSchema = generatePhysicianSchema(siteUrl)

	return (
		<>
			<JsonLd data={faqSchema} />
			<JsonLd data={physicianSchema} />
			<PageWrapper />
		</>
	)
}
