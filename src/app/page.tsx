"use client"
import { useEffect, useState, useRef } from "react"
import InitialLayout from "@/components/pages/initialLayout"
import SecondLayout from "@/components/pages/secondLayout"
import ThirdLayout from "@/components//pages/thirdLayout"
import sectionStyles from "@/styles/section.module.css"
import "../styles/globals.css"
import FourthLayout from "@/components/pages/fourthLayout"
import FifthLayout from "@/components/pages/fifthLayout"

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
			{/* FourthLayout */}
			<div
				ref={(el) => {
					if (el) sectionsRef.current[3] = el
				}}
				className={`${sectionStyles.section} ${sectionStyles["section--inverted"]}`}
			>
				<FourthLayout />
			</div>
			<div
				ref={(el) => {
					if (el) sectionsRef.current[0] = el
				}}
				className={`${sectionStyles.section}`}
			>
				<FifthLayout />
			</div>
		</main>
	)
}
