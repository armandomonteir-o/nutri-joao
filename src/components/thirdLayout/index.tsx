"use client"
import { useEffect, useRef, Fragment } from "react"
import Image from "next/image"
import styles from "./thirdLayout.module.css"
import { plans } from "@/constants/plans"
import Separator from "../Separator"

export default function ThirdLayout() {
	const cardsRef = useRef<Array<HTMLDivElement | null>>([])
	const h2Ref = useRef<HTMLHeadingElement | null>(null)
	const benefitItemsRef = useRef<Array<HTMLDivElement | null>>([])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible)
						if (
							entry.target.classList.contains(styles.card)
						) {
							const benefitItems =
								entry.target.querySelectorAll(
									`.${styles.benefitItem}`
								)
							benefitItems.forEach((item) => {
								item.classList.add(styles.visible)
							})
							setTimeout(() => {
								entry.target.classList.add(
									styles.visible
								)
							}, 100)
						}
					}
				})
			},
			{
				threshold: 0.1,
			}
		)

		if (h2Ref.current) observer.observe(h2Ref.current)
		cardsRef.current.forEach((card) => card && observer.observe(card))
		benefitItemsRef.current.forEach(
			(item) => item && observer.observe(item)
		)

		return () => observer.disconnect()
	}, [])

	return (
		<div className={styles.container}>
			<h2 ref={h2Ref}>CONFIRA OS PLANOS</h2>

			{plans.map((plan, index) => (
				<Fragment key={plan.id}>
					<div
						ref={(el) => {
							if (el) cardsRef.current[index] = el
						}}
						className={`${styles.card} ${
							index % 2 ? styles.left : styles.right
						}`}
					>
						<div className={styles.contentWrapper}>
							{/* Container da imagem */}
							<div className={styles.imageSection}>
								<div className={styles.iconContainer}>
									<Image
										className={styles.icon}
										src={plan.icon.src}
										alt={plan.title}
										width={125}
										height={125}
										priority={index === 0}
									/>
								</div>
							</div>

							{/* Container de conteúdo */}
							<div className={styles.textSection}>
								<header className={styles.cardHeader}>
									<h3>{plan.title}</h3>
								</header>

								<div className={styles.benefitsGrid}>
									{plan.benefits.map(
										(benefit, i) => (
											<div
												ref={(el) => {
													if (el)
														benefitItemsRef.current[
															i
														] = el
												}}
												key={i}
												className={
													styles.benefitItem
												}
											>
												<span
													className={
														styles.checkIcon
													}
												>
													✓
												</span>
												<span
													className={
														styles.benefitText
													}
												>
													{benefit}
												</span>
											</div>
										)
									)}
								</div>

								<footer className={styles.cardFooter}>
									<a
										href={`https://wa.me/5524998416823?text=${encodeURIComponent(
											plan.whatsappMessage
										)}`}
										className={
											styles.whatsappButton
										}
										target="_blank"
										rel="noopener noreferrer"
									>
										Quero este plano
									</a>
								</footer>
							</div>
						</div>
					</div>

					{index < plans.length - 1 && <Separator />}
				</Fragment>
			))}
		</div>
	)
}
