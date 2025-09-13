"use client"
import { useRef } from "react"
import dynamic from "next/dynamic"
import InitialLayout from "@/components/pages/initialLayout"
import LazyLoadSection from "@/components/LazyLoadSection"

const SecondLayout = dynamic(() => import("@/components/pages/secondLayout"))
const ThirdLayout = dynamic(() => import("@/components/pages/thirdLayout"))
const FourthLayout = dynamic(() => import("@/components/pages/fourthLayout"))
const FifthLayout = dynamic(() => import("@/components/pages/fifthLayout"))

import sectionStyles from "@/styles/section.module.css"
import "../styles/globals.css"

export default function Home() {
	const sectionsRef = useRef<HTMLDivElement[]>([])

	return (
		<main>
			<div
				ref={(el) => {
					if (el) sectionsRef.current[0] = el
				}}
				className={`${sectionStyles.section}`}
			>
				<InitialLayout />
			</div>

			<LazyLoadSection
				className={`${sectionStyles.section} ${sectionStyles["section--inverted"]}`}
			>
				<SecondLayout />
			</LazyLoadSection>

			<LazyLoadSection
				className={`${sectionStyles.section} ${sectionStyles["third-layout-section"]}`}
			>
				<ThirdLayout />
			</LazyLoadSection>

			<LazyLoadSection
				className={`${sectionStyles.section} ${sectionStyles["section--inverted"]}`}
			>
				<FourthLayout />
			</LazyLoadSection>

			<LazyLoadSection className={`${sectionStyles.section}`}>
				<FifthLayout />
			</LazyLoadSection>
		</main>
	)
}
