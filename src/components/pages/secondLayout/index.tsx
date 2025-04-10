"use client"
import { useEffect, useRef } from "react"
import styles from "@/components/pages/secondLayout/secondLayout.module.css"
import slimMindLogo from "../../../../public/images/slimmindlogo.webp"
import Image from "next/image"
import JampaImage from "../../../../public/images/jampo.png"
import Button from "@/components/Button"

export default function SecondLayout() {
	const firstCardRef = useRef(null)
	const secondCardRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible)
					}
				})
			},
			{
				threshold: 0.2,
			},
		)

		if (firstCardRef.current) observer.observe(firstCardRef.current)
		if (secondCardRef.current) observer.observe(secondCardRef.current)

		return () => observer.disconnect()
	}, [])

	return (
		<>
			<div className={styles.container}>
				{/* Primeiro Card  */}
				<div
					ref={firstCardRef}
					className={`${styles.card} ${styles.right} ${styles.hidden}`}
				>
					<h2>Quem sou eu?</h2>
					<div className={styles.contentWrapper}>
						<p>
							Meu nome é João Paulo, sou nutricionista
							formado pelo Centro Universitário de Barra
							Mansa (UBM) e pós-graduando em Nutrição
							Comportamental e Clínica pela Uniguaçu. Minha
							missão na nutrição é transformar a relação
							das pessoas com a alimentação, combatendo o
							terrorismo nutricional que, muitas vezes,
							contribui para o desenvolvimento de
							transtornos alimentares e prejudica a relação
							com a comida. Se quiser saber mais sobre mim,
							clique no botão abaixo
						</p>
						<Image
							src={JampaImage}
							alt="Psicólogo João Paulo"
							width={350}
							height={350}
							className={styles.responsiveImage}
							style={{
								borderRadius: "12px",
							}}
						/>
					</div>
					<Button>Entre em contato</Button>
				</div>

				<div
					ref={secondCardRef}
					className={`${styles.card} ${styles.left} ${styles.hidden}`}
				>
					<h2>O que é a SlimMind</h2>
					<div className={styles.contentWrapper}>
						<Image
							src={slimMindLogo}
							alt="logo"
							width={350}
							height={350}
							className={styles.responsiveImage}
							style={{
								borderRadius: "12px",
							}}
						/>
						<p>
							A SlimMind é um projeto que tem como missão
							transformar vidas por meio da nutrição. Nosso
							principal foco é o tratamento e a remissão de
							transtornos alimentares, mas também
							trabalhamos com hipertrofia e emagrecimento,
							sempre respeitando a individualidade de cada
							pessoa.
							<br /> Mais do que um método a ser seguido, a
							SlimMind representa um estilo de vida: uma
							mudança de hábitos sustentáveis que permite
							alcançar uma relação equilibrada com a
							alimentação. Aqui, você encontrará o suporte
							necessário para essa transformação.
							<br /> Se deseja se tornar um parceiro da
							SlimMind, clique no botão abaixo.
						</p>
					</div>
					<Button variant="secondary">Conheça mais</Button>
				</div>
			</div>
		</>
	)
}
