import { Service, WithContext } from "schema-dts"
import { plans } from "@/constants/plans"

export function generateServiceSchemas(
	siteUrl: string,
	physicianId: string
): WithContext<Service>[] {
	return plans.map((plan): WithContext<Service> => {
		return {
			"@context": "https://schema.org",
			"@type": "Service",
			name: plan.title,

			description: plan.benefits.join(". "),
			serviceType: "Consultoria Nutricional",

			provider: {
				"@type": "Physician",
				"@id": physicianId,
			},

			offers: {
				"@type": "Offer",
				price: plan.price.toString(),
				priceCurrency: "BRL",
			},
		}
	})
}
