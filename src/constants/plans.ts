import jampaThreeIcon from "../../public/images/jampaempe3.png"
import jampaOneIcon from "../../public/images/jampaempe1.png"
import jampaTwoIcon from "../../public/images/jampaempe2.png"
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
		icon: jampaThreeIcon,
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
		icon: jampaTwoIcon,
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
		icon: jampaOneIcon,
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
