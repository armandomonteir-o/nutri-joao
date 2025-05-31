import type { Metadata } from "next"
import { Geist, Geist_Mono, Anton } from "next/font/google"
import "../styles/globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Consultoria Nutricional SlimMind",
	description:
		"Alcance seus objetivos de saúde com a Consultoria Nutricional SlimMind em Pinheiral. Planos personalizados para emagrecimento e bem-estar. Agende sua consulta!",
}

const anton = Anton({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-anton",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${anton.variable}`}
			>
				{children}
			</body>
		</html>
	)
}
