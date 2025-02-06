"use client"
import { useEffect, useState, useRef } from "react"
import InitialLayout from "@/components/initialLayout"
import SecondLayout from "@/components/secondLayout"
import ThirdLayout from "@/components/thirdLayout"
import sectionStyles from "@/styles/section.module.css"
import "../styles/globals.css"

export default function Home() {
	const [, setActiveSection] = useState(0)
	const sectionsRef = useRef<HTMLDivElement[]>([])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = sectionsRef.current.indexOf(
							entry.target as HTMLDivElement
						)
						setActiveSection(index)
					}
				})
			},
			{ threshold: 0.5 }
		)

		sectionsRef.current.forEach((section: HTMLDivElement) =>
			observer.observe(section)
		)
		return () => observer.disconnect()
	}, [])

	return (
		<main>
			{/* InitialLayout */}
			<div
				ref={(el) => {
					if (el) sectionsRef.current[0] = el
				}}
				className={`${sectionStyles.section}`}
			>
				<InitialLayout />
			</div>

			{/* SecondLayout */}
			<div
				ref={(el) => {
					if (el) sectionsRef.current[1] = el
				}}
				className={`${sectionStyles.section} ${sectionStyles["section--inverted"]}`}
			>
				<SecondLayout />
			</div>
			{/* ThirdLayout */}
			<div
				ref={(el) => {
					if (el) sectionsRef.current[2] = el
				}}
				className={`${sectionStyles.section} ${sectionStyles["third-layout-section"]}`}
			>
				<ThirdLayout />
			</div>
		</main>
	)
}
