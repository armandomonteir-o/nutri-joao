import { Physician, WithContext } from "schema-dts"

export function generatePhysicianSchema(
	siteUrl: string
): WithContext<Physician> {
	return {
		"@context": "https://schema.org",
		"@type": "Physician",
		"@id": `${siteUrl}#physician`,
		name: "João Paulo Garcia",
		identifier: "CRN: 24102303",
		description:
			"Nutricionista em Angra dos Reis focado em nutrição comportamental, emagrecimento, transtornos alimentares e hipertrofia.",
		url: siteUrl,
		telephone: "+5524998416823",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Angra dos Reis",
			addressRegion: "RJ",
			addressCountry: "BR",
		},
		alumni: [
			{
				"@type": "Person",
				name: "João Paulo Garcia",
				alumniOf: {
					"@type": "EducationalOrganization",
					name: "Centro Universitário de Barra Mansa (UBM)",
				},
			},
			{
				"@type": "Person",
				name: "João Paulo Garcia",
				alumniOf: {
					"@type": "EducationalOrganization",
					name: "Uniguaçu",
				},
			},
		],
		knowsAbout: [
			"Nutrição Comportamental",
			"Nutrição Clínica",
			"Emagrecimento",
			"Hipertrofia",
			"Transtornos Alimentares",
		],
	}
}
