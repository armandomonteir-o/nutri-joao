import Image from "next/image"
import styles from "./Separator.module.css"

export default function Separator() {
	const logos = [
		"/slimmindwhitelogo.png",
		"/slimmindwhitelogo.png",
		"/slimmindwhitelogo.png",
		"/slimmindwhitelogo.png",
		"/slimmindwhitelogo.png",
		"/slimmindwhitelogo.png",
		"/slimmindwhitelogo.png",
	]

	return (
		<div className={styles.separator}>
			{logos.map((logo, index) => (
				<Image
					key={index}
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
		</div>
	)
}
