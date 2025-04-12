"use client"
import { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import Image from "next/image"
import styles from "@/components/pages/fourthLayout/fourthLayout.module.css"
import { feedback } from "@/constants/feedbacks"
import "react-alice-carousel/lib/alice-carousel.css"
import RatingAverage from "@/components/RatingAverage"

export default function FourthLayout() {
	const responsive = {
		0: { items: 1 },
		768: { items: 2 },
		1024: { items: 3 },
	}

	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	// Prepara os itens do carrossel
	const carouselItems = feedback.map((item, index) => (
		<div key={index} className={styles.carouselItem}>
			<div className={styles.feedbackCard}>
				<Image
					src={item.avatar}
					alt={item.name}
					width={120}
					height={120}
					className={styles.avatar}
				/>
				<h3 className={styles.clientName}>{item.name}</h3>
				<p className={styles.clientRole}>{item.role}</p>
				<p className={styles.feedbackText}>{item.text}</p>
			</div>
		</div>
	))

	return (
		<div className={styles.container}>
			<div className={styles.whyConsultWrapper}>
				<h2>Por que consultar comigo?</h2>

				<RatingAverage />

				<p>
					Você não precisa embarcar em &ldquo;mais uma
					dieta&rdquo; restritiva e frustrante.
				</p>
				<p>
					O que você realmente precisa é de um acompanhamento que
					olhe para você como um todo: considerando sua mente,
					sua rotina, suas emoções e seus objetivos de vida.
				</p>
				<p>
					Consultar comigo é dar um passo em direção a uma vida
					mais leve e equilibrada, onde a nutrição se torna parte
					natural de quem você é, e não uma obrigação passageira.
				</p>
				<p>
					Eu estarei ao seu lado em cada etapa desta jornada.
					Alcançar seus resultados não é apenas meu trabalho, é a
					minha missão.
				</p>
			</div>
			<div className={styles.carouselWrapper}>
				{isClient ? (
					<AliceCarousel
						mouseTracking
						infinite
						autoPlay
						autoPlayInterval={3000}
						animationDuration={800}
						disableDotsControls
						responsive={responsive}
						items={carouselItems}
					/>
				) : (
					<div className={styles.loadingCarousel}>
						Carregando depoimentos...
					</div>
				)}
			</div>
		</div>
	)
}
