import exerciseIcon from "../../public/exercise.svg"
import weightsIcon from "../../public/weights.svg"
import graphIcon from "../../public/graph.svg"

export const plans = [
	{
		id: "consulta-reavaliacao",
		icon: exerciseIcon,
		title: "Consulta e reavaliação",
		benefits: [
			"Consultoria básica ",
			"Consultoria básica",
			"Consultoria básica",
		],
		whatsappMessage:
			"Olá, gostaria de saber mais sobre o plano *Consulta e reavaliação!*",
	},
	{
		id: "consultoria-3meses",
		icon: weightsIcon,
		title: "Consultoria 3 meses",
		benefits: [
			"Todas vantagens do plano anterior",
			"Acesso a comunidade exclusiva",
			"Monitoramento semanal do cultivo",
		],
		whatsappMessage: "Olá, quero assinar o plano Consultoria 3 meses!",
	},
	{
		id: "consultoria-6meses",
		icon: graphIcon,
		title: "Consultoria 6 meses",
		benefits: [
			"Consultoria premium 24/7",
			"Consultoria premium 24/7",
			"Consultoria premium 24/7",
		],
		whatsappMessage: "Olá, me interesso pelo plano Consultoria 6 meses",
	},
]
