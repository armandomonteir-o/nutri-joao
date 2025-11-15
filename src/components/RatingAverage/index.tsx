"use client"
import { useEffect, useState } from "react"
import styles from "./RatingAverage.module.css"
import Image from "next/image"
import { RatingData } from "@/types/ratingData"

interface RatingAverageProps {
	initialData?: RatingData
}

export default function RatingAverage({ initialData }: RatingAverageProps) {
	const [ratingData, setRatingData] = useState<RatingData>(
		initialData || {
			averageRating: 0,
			totalReviews: 0,
		}
	)
	const [loading, setLoading] = useState(!initialData)
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)

		async function fetchRatings() {
			try {
				const response = await fetch("/api/ratings")
				const data = await response.json()

				if (!response.ok) {
					throw new Error(
						data.error || "Erro ao carregar avaliações"
					)
				}

				setRatingData(data)
			} catch (error) {
				console.error("Erro ao buscar avaliações:", error)
				setRatingData({
					averageRating: 0,
					totalReviews: 0,
					error:
						error instanceof Error
							? error.message
							: "Erro ao carregar avaliações",
				})
			} finally {
				setLoading(false)
			}
		}

		if (!initialData) {
			fetchRatings()
		}
	}, [initialData])

	const renderStars = (rating: number) => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(
					<Image
						key={i}
						src="/images/star-filled.svg"
						alt="Estrela"
						width={24}
						height={24}
						className={styles.star}
					/>
				)
			} else if (i - 0.5 <= rating) {
				stars.push(
					<Image
						key={i}
						src="/images/star-half.svg"
						alt="Meia estrela"
						width={24}
						height={24}
						className={styles.star}
					/>
				)
			} else {
				stars.push(
					<Image
						key={i}
						src="/images/star-empty.svg"
						alt="Estrela vazia"
						width={24}
						height={24}
						className={styles.star}
					/>
				)
			}
		}
		return stars
	}

	if (!isClient) {
		return null
	}

	if (loading) {
		return (
			<div className={styles.ratingContainer}>
				<div className={styles.loading}>
					Carregando avaliações...
				</div>
			</div>
		)
	}

	if (ratingData.error) {
		return (
			<div className={styles.ratingContainer}>
				<div className={styles.message}>
					<Image
						src="/images/star-empty.svg"
						alt="Ícone de avaliação"
						width={32}
						height={32}
						className={styles.messageIcon}
					/>
					<p>{ratingData.error}</p>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.ratingContainer}>
			<div className={styles.ratingStars}>
				{renderStars(ratingData.averageRating)}
			</div>
			<div className={styles.ratingInfo}>
				<span className={styles.ratingValue}>
					{ratingData.averageRating.toFixed(1)}
				</span>
				<span className={styles.ratingCount}>
					({ratingData.totalReviews} avaliações)
				</span>
			</div>
		</div>
	)
}
