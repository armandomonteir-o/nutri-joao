"use client"
import { useEffect, useRef } from "react"
import styles from "@/components/pages/fifthLayout/fifthLayout.module.css"
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"
import { faq } from "@/constants/faq"

export default function FifthLayout() {
	const faqRefs = useRef<HTMLDivElement[]>([])
	const items = faq

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible)
						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.1,
				rootMargin: "50px",
			}
		)

		faqRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref)
		})

		return () => observer.disconnect()
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.socialContainer}>
				<h2>Entre em contato comigo nas minhas redes sociais</h2>
				<div className={styles.socialLinks}>
					<a
						href="https://instagram.com/nutrijoaogarcia"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram size={48} />
					</a>
					<a
						href="https://wa.me/5524998416823"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaWhatsapp size={48} />
					</a>
					<a
						href="https://www.linkedin.com/in/jo%C3%A3o-garcia-a78018240/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin size={48} />
					</a>
				</div>
			</div>

			<div className={styles.faqContainer}>
				{items.map((item, index) => (
					<div
						key={index}
						ref={(el) => {
							if (el) faqRefs.current[index] = el
						}}
						className={styles.faqWrapper}
					>
						<h3 className={styles.faqQuestion}>
							{item.question}
						</h3>
						<p className={styles.faqAnswer}>{item.answer}</p>
					</div>
				))}
			</div>
		</div>
	)
}
