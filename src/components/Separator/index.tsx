import Image from "next/image"
import styles from "./Separator.module.css"
import { defaultLogos } from "@/constants/logos"

interface SeparatorProps {
	type?: "default" | "Continuous"
	logos?: string[]
}

export default function Separator({
	type = "default",
	logos = defaultLogos,
}: SeparatorProps) {
	const repeatedText = Array(15).fill("SlimMind")

	return (
		<div className={styles.separator} data-type={type}>
			{type === "Continuous" ? (
				<div className={styles.continuousContainer}>
					<div
						className={`${styles.continuousRow} ${styles.reverse}`}
					>
						{repeatedText.map((text, index) => (
							<span
								key={`bottom-${index}`}
								className={styles.text}
							>
								{text}
							</span>
						))}
					</div>
					<div className={styles.continuousRow}>
						{repeatedText.map((text, index) => (
							<span
								key={`top-${index}`}
								className={styles.text}
							>
								{text}
							</span>
						))}
					</div>
				</div>
			) : (
				<>
					{logos.map((logo, index) => (
						<Image
							key={`${logo}-${index}`}
							src={logo}
							alt={`Logo ${index + 1}`}
							width={250}
							height={250}
							className={`${styles.logo} ${
								index % 2 === 0
									? styles.logoRight
									: styles.logoLeft
							}`}
							style={{
								minWidth: `${75 / logos.length}%`,
								animationDelay: `${index * 0.5}s`,
							}}
						/>
					))}
				</>
			)}
		</div>
	)
}
