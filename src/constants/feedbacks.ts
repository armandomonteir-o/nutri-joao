import { StaticImageData } from "next/image"
import weightIcon from "../../public/images/weights.svg"

interface feedback {
	name: string
	role: string
	text: string
	avatar: StaticImageData
}

export const feedback = [
	{
		name: "Guilherme Veroneze",
		role: "Desenvolvedor",
		text: "Graças ao nutricionista João Paulo, consegui perder cerca de 5kg em menos de um mês, além disso, o plano alimentar me ajudou a regular minha rotina, melhorando meu sono e me dando mais disposição durante a semana.",
		avatar: weightIcon,
	},
	{
		name: "Susana Machado",
		role: "Vendedora",
		text: "Conheci meu nutricionista no Instagram, comecei a seguir, e vi o trabalho dele., Eu não estava bem, acima do peso, e triste. o meu nutri não só me ajudou a ter uma alimentação saudável, incentivou a malhar e cuidar da mente... Meu nutri, é completo 🌻 indico sem medo.",
		avatar: weightIcon,
	},
	{
		name: "Mãe do jampa",
		role: "Mãe dele",
		text: "meu filho é um gênio!",
		avatar: weightIcon,
	},
]
