import "../styles/globals.css"
import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"

export const metadata: Metadata = {
	title: "Nutricionista em Angra dos Reis - Consultoria SlimMind | João Paulo",
	description:
		"Transforme sua saúde com João Paulo, nutricionista em Angra dos Reis. Foco em emagrecimento, transtornos alimentares e hipertrofia. Agende sua consulta!",
}

export default function Home() {
	return <PageWrapper />
}
