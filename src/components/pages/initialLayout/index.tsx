"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import slimMindLogo from "../../../../public/images/slimmindwhitelogo.webp"
import styles from "@/components/pages/initialLayout/initialLayout.module.css"
import Button from "@/components/Button"
import Video from "next-video"
import JoaoVideo from "../../../../videos/joao-paulo-video.mp4"

export default function InitialLayout() {
	const [videoError, setVideoError] = useState(false)
	const [isOperaGX, setIsOperaGX] = useState(false)

	const handleClick = () => {
		console.log("oi")
	}

	const handleVideoError = (e) => {
		console.error("Erro ao carregar o vídeo:", e)
		setVideoError(true)
	}

	// Adicionar event listener para detectar erros de vídeo
	useEffect(() => {
		// Detectar especificamente Opera GX
		const userAgent = navigator.userAgent
		const isOpera =
			userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1
		const isOperaGXBrowser = isOpera && userAgent.indexOf("GX") > -1

		setIsOperaGX(isOperaGXBrowser)

		const videoElement = document.querySelector("video")
		if (videoElement) {
			videoElement.addEventListener("error", handleVideoError)

			// Aplicar ajustes apenas se for Opera GX
			if (isOperaGXBrowser) {
				console.log(
					"Opera GX detectado, usando configurações específicas"
				)
				// Configurações específicas para Opera GX
				if (
					videoElement.canPlayType(
						'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
					)
				) {
					// Alguma lógica específica para Opera GX se necessário
				}
			}
		}

		return () => {
			if (videoElement) {
				videoElement.removeEventListener("error", handleVideoError)
			}
		}
	}, [])

	// URL da thumbnail do Mux - mais um timestamp para evitar cache
	const thumbnailUrl =
		"https://image.mux.com/NYOwxRhlTEMW27Ux1ovaNzoqCq0192SIH7i1262baM02k/thumbnail.png?time=540&width=800&height=450&fit_mode=preserve"

	return (
		<>
			<div className={styles.container}>
				<div className={styles.innercontainer}>
					<div className={styles.logoWrapper}>
						<Image
							src={slimMindLogo}
							alt="Logo SlimMind"
							width={150}
							height={150}
						></Image>
					</div>
					<h1>Nutricionista - João Paulo</h1>
					<h2>
						Bem vindo ao primeiro passo da sua grande mudança.
					</h2>
					<div className={styles.videocontainer}>
						{videoError ? (
							// Fallback para quando o vídeo não carregar
							<div className={styles.fallbackVideo}>
								<Image
									src={thumbnailUrl}
									alt="Thumbnail do vídeo"
									width={800}
									height={450}
									className={styles.fallbackImage}
								/>
								<div className={styles.fallbackMessage}>
									<p>
										O vídeo não pode ser
										carregado.
									</p>
									<a
										href="https://www.youtube.com/watch?v=sua_url_do_youtube"
										target="_blank"
										rel="noopener noreferrer"
									>
										Assistir no YouTube
									</a>
								</div>
							</div>
						) : (
							<>
								{isOperaGX ? (
									// Versão específica para Opera GX
									<Video
										className={
											styles.videocontainer
										}
										src={JoaoVideo}
										controls={true}
										poster={thumbnailUrl}
										preload="metadata"
										autoPlay={false}
										onError={handleVideoError}
										playsInline={true}
									>
										{/* Fontes alternativas específicas para Opera GX */}
										<source
											src="https://stream.mux.com/NYOwxRhlTEMW27Ux1ovaNzoqCq0192SIH7i1262baM02k/medium.mp4"
											type="video/mp4"
										/>
										<p>
											Seu navegador não suporta
											vídeos HTML5. Aqui está
											um{" "}
											<a href="https://stream.mux.com/NYOwxRhlTEMW27Ux1ovaNzoqCq0192SIH7i1262baM02k/medium.mp4">
												link para o vídeo
											</a>
											.
										</p>
									</Video>
								) : (
									// Versão padrão para outros navegadores
									<Video
										className={
											styles.videocontainer
										}
										src={JoaoVideo}
										controls={true}
										poster={thumbnailUrl}
										preload="metadata"
										autoPlay={false}
										onError={handleVideoError}
										playsInline={true}
									/>
								)}
							</>
						)}
					</div>
					<div className={styles.buttonWrapper}>
						<Button
							variant="thirdary"
							onClick={handleClick}
							scrollTo="third-layout-section"
						>
							Quero consultar
						</Button>
						<div className={styles.priceText}>
							<p>Consulte por menos de</p>
							<p>R$120,00 por mês!</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
