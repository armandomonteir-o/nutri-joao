"use client"
import { useEffect, useRef } from "react"
import styles from "@/components/pages/fifthLayout/fifthLayout.module.css"
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa"

export default function FifthLayout() {
	const faqRefs = useRef<HTMLDivElement[]>([])

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
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram size={32} />
					</a>
					<a
						href="https://wa.me/5524998416823"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaWhatsapp size={32} />
					</a>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook size={32} />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin size={32} />
					</a>
				</div>
			</div>

			<div className={styles.faqContainer}>
				{[...Array(3)].map((_, index) => (
					<div
						key={index}
						ref={(el) => {
							if (el) faqRefs.current[index] = el
						}}
						className={styles.faqWrapper}
					>
						<h3 className={styles.faqQuestion}>
							Ficou alguma dúvida?
						</h3>
						<p className={styles.faqAnswer}>tantannanan</p>
					</div>
				))}
			</div>
		</div>
	)
}
