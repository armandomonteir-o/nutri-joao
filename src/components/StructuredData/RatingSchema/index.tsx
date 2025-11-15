import type { AggregateRating, WithContext } from "schema-dts"
import { RatingData } from "@/types/ratingData"

export default function generateRatingSchema(
	ratingData: RatingData,
	linkedPhysicianId: string
): WithContext<AggregateRating> | null {
	if (!ratingData || ratingData.totalReviews === 0 || ratingData.error) {
		return null
	}
	return {
		"@context": "https://schema.org",
		"@type": "AggregateRating",
		itemReviewed: {
			"@type": "Physician",
			"@id": linkedPhysicianId,
		},
		ratingValue: ratingData.averageRating,
		reviewCount: ratingData.totalReviews,
	}
}
