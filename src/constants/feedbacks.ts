import { StaticImageData } from "next/image"
import weightIcon from "../../public/weights.svg"


interface feedback {
	name: string
	role: string
	text: string
	avatar: StaticImageData
}

export const feedback = [
	{
		name: "Armando Monteiro",
		role: "mlk do momento",
		text: "Graças ao jampa eu engordei 20kg em 3 meses!",
		avatar: weightIcon,
	},
	{
		name: "The Weeknd",
		role: "melhor artista do mundo",
		text: "graças ao Jampa eu lancei meu novo álbum!",
		avatar: weightIcon,
	},
	{
		name: "Mãe do jampa",
		role: "Mãe dele",
		text: "meu filho é um gênio!",
		avatar: weightIcon,
	},
]
