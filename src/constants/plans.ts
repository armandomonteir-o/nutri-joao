import jampaThreeIcon from "../../public/images/joão-em-pé-3.webp"
import jampaOneIcon from "../../public/images/joão-em-pé.webp"
import jampaTwoIcon from "../../public/images/joão-em-pé-2.webp"
import { StaticImageData } from "next/image"

interface Plan {
	id: string
	icon: StaticImageData
	title: string
	benefits: string[]
	price: number
	whatsappMessage: string
}

export const plans: Plan[] = [
	{
		id: "consulta-reavaliacao",
		icon: jampaOneIcon,
		title: "Consulta e Reavaliação",
		benefits: [
			"Avaliação inicial completa",
			"Plano nutricional personalizado",
			"Acompanhamento quinzenal",
		],
		price: 100,
		whatsappMessage:
			"Olá, João. Estava lendo sobre os planos e me interessei pelo o de *Consulta e reavaliação*. Gostaria de saber mais sobre ele! 😄",
	},
	{
		id: "consultoria-3meses",
		icon: jampaThreeIcon,
		title: "Consultoria 3 meses",
		benefits: [
			"Todas vantagens do plano anterior",
			"Acesso a comunidade exclusiva",
			"Monitoramento semanal do cultivo",
		],
		price: 200,
		whatsappMessage:
			"Olá, João. Estava lendo sobre os planos e me interessei pelo o de *Consultoria de 3 meses*. Gostaria de saber mais sobre ele! 😄",
	},
	{
		id: "consultoria-6meses",
		icon: jampaTwoIcon,
		title: "Consultoria 6 meses",
		benefits: [
			"Consultoria premium 24/7",
			"Comigo você é bem mais feliz",
			"Garantia de sucesso",
		],
		price: 300,
		whatsappMessage:
			"Olá, João. Estava lendo sobre os planos e me interessei pelo o de *Consultoria de 6 meses*. Gostaria de saber mais sobre ele! 😄",
	},
]
