"use client"
import { useEffect, useState } from "react"
import styles from "./RatingAverage.module.css"
import Image from "next/image"

interface RatingData {
	averageRating: number
	totalReviews: number
	error?: string
}

export default function RatingAverage() {
	const [ratingData, setRatingData] = useState<RatingData>({
		averageRating: 0,
		totalReviews: 0,
	})
	const [loading, setLoading] = useState(true)
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		// Marca que estamos no cliente
		setIsClient(true)

		async function fetchRatings() {
			try {
				const response = await fetch("/api/ratings")
				if (!response.ok) {
					throw new Error("Falha ao buscar as avaliações")
				}
				const data = await response.json()
				setRatingData(data)
			} catch (error) {
				console.error("Erro ao buscar avaliações:", error)
			} finally {
				setLoading(false)
			}
		}

		fetchRatings()
	}, [])

	// Renderiza as estrelas com base na avaliação média
	const renderStars = () => {
		const stars = []
		const rating = ratingData.averageRating

		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				// Estrela cheia
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
				// Meia estrela
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
				// Estrela vazia
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

	// Só renderiza o componente no cliente para evitar erros de hidratação
	if (!isClient) {
		return null // Não renderiza nada no servidor
	}

	if (loading) {
		return (
			<div className={styles.ratingContainer}>
				<div className={styles.loading}>Carregando avaliações</div>
			</div>
		)
	}

	return (
		<div className={styles.ratingContainer}>
			<div className={styles.ratingStars}>{renderStars()}</div>
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
