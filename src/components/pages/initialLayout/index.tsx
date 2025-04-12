"use client"
import Image from "next/image"
import slimMindLogo from "../../../../public/images/slimmindwhitelogo.webp"
import styles from "@/components/pages/initialLayout/initialLayout.module.css"
import Button from "@/components/Button"

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
					{/* <div className={styles.videocontainer}>
      <Video
          className={styles.videocontainer}
          src={getStarted}
          controls={true}
          style={{
              height: "40vh",
          }}
      ></Video>
  </div> */}
					<div
						className={styles.videocontainer}
						style={{
							height: "40vh",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<p>Em breve...</p>
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
