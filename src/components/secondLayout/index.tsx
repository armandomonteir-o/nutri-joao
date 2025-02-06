"use client"
import { useEffect, useRef } from "react"
import styles from "../secondLayout/secondLayout.module.css"
import slimMindLogo from "../../../public/slimmindlogo.png"
import Image from "next/image"
import JampaImage from "../../../public/jampo.png"
import Button from "../Button"

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
			}
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
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit
							esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
						<Image
							src={JampaImage}
							alt="Psicólogo João Paulo"
							width={350}
							height={350}
							style={{
								borderRadius: "12px",
							}}
						/>
					</div>
					<Button>Entre em contato</Button>
				</div>

				{/* Segundo Card  */}
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
							style={{
								borderRadius: "12px",
								marginLeft: "2rem",
							}}
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit
							esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
					</div>
					<Button variant="secondary">Conheça mais</Button>
				</div>
			</div>
		</>
	)
}
