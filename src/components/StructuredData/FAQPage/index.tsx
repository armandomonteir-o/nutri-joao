import type { FAQPage, Question, WithContext } from "schema-dts"
import { faq } from "@/constants/faq"

export function generateFaqSchema(): WithContext<FAQPage> {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faq.map((item): Question => {
			return {
				"@type": "Question",
				name: item.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: item.answer,
				},
			}
		}),
	}
}
