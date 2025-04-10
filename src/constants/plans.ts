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
			"2 Consultas, sendo a segunda apenas para reavaliação, pode esta ser marcada até 45 dias após a primeira consulta.",
			"Elaboração do cardápio junto com o paciente.",
			"Suporte whatsapp podendo levar até 48h para retorno.",
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
			"4 consultas (online)",
			"Elaboração do cardápio junto com o paciente.",
			"Suporte no whatsapp de 7h às 19h.",
			"Alteração do cardápio sempre que o paciente solicitar.",
			"Acompanhamento semanal via whatsapp",
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
			"7 consultas (online)",
			"Elaboração do plano alimentar junto com o paciente",
			"Alteração do plano alimentar sempre que o paciente solicitar",
			"Suporte viia whatsapp de 7h às 19h.",
			"Acompanhamento semanal via whatsapp.",
			"Reeducação alimentar",
		],
		price: 300,
		whatsappMessage:
			"Olá, João. Estava lendo sobre os planos e me interessei pelo o de *Consultoria de 6 meses*. Gostaria de saber mais sobre ele! 😄",
	},
]
