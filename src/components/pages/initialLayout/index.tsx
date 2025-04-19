"use client"
import Image from "next/image"
import slimMindLogo from "../../../../public/images/slimmindwhitelogo.webp"
import styles from "@/components/pages/initialLayout/initialLayout.module.css"
import Button from "@/components/Button"
import Video from "next-video"



export default function initialLayout() {
	const handleClick = () => {
		console.log("oi")
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.innercontainer}>
					<Image
						src={slimMindLogo}
						alt="Logo SlimMind"
						width={150}
						height={150}
					></Image>
					<h1>Nutricionista - João Paulo</h1>
					<h2>
						Bem vindo ao primeiro passo da sua grande mudança.
					</h2>
					<div className={styles.videocontainer}>
						<Video
							className={styles.videocontainer}
							src="https://stream.mux.com/PNal02O01amnHs5iSphe3xDGMygKjBZ0201JfxENzCy6C4w.m3u8"
							controls={true}
							style={{
								height: "40vh",
							}}
						></Video>
					</div>
					<div className={styles.buttonWrapper}>
						<Button
							variant="thirdary"
							onClick={handleClick}
							scrollTo="third-layout-section"
						>
							Quero consultar
						</Button>
						<p>Consultoria por menos de R$120,00 por mês!</p>
					</div>
				</div>
			</div>
		</>
	)
}
