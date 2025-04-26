"use client"
import { useEffect, useRef, Fragment } from "react"
import Image from "next/image"
import styles from "@/components/pages/thirdLayout/thirdLayout.module.css"
import { plans } from "@/constants/plans"
import Separator from "@/components/Separator"

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
		<div className={`${styles.container} third-layout-section`}>
			<h2 ref={h2Ref}>CONFIRA OS PLANOS</h2>

			{plans.map((plan, index) => (
				<Fragment key={plan.id}>
					<div
						ref={(el) => {
							if (el) cardsRef.current[index] = el
						}}
						className={styles.card}
						style={{
							flexDirection:
								index === 1 ? "row-reverse" : "row",
						}}
					>
						<div
							className={`${styles.contentWrapper} ${
								index === 1
									? styles.contentWrapperReversed
									: ""
							}`}
						>
							{/* Container da imagem */}
							<div
								className={`${styles.imageSection} ${
									index === 1
										? styles.imageSectionSecond
										: index === 2
										? styles.imageSectionThird
										: ""
								}`}
							>
								<div
									className={`${styles.iconContainer}
        ${
			index === 1
				? styles.iconContainerSecond
				: index === 2
				? styles.iconContainerThird
				: ""
		}`}
								>
									<Image
										className={`${styles.icon}
                ${
					index === 1
						? styles.iconSecond
						: index === 2
						? styles.iconThird
						: ""
				}`}
										src={plan.icon.src}
										alt={plan.title}
										width={500}
										height={500}
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
										href={`https://api.whatsapp.com/send?phone=5524998416823&text=${encodeURIComponent(
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

					<div
						style={{
							marginTop:
								index === plans.length - 1
									? "-10vh"
									: 0,
						}}
					>
						<Separator
							type={
								index === plans.length - 1
									? "Continuous"
									: "default"
							}
						/>
					</div>
				</Fragment>
			))}
		</div>
	)
}
