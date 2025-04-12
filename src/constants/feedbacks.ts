// Remova os imports das imagens, pois elas virão da pasta public
// import avatarGuilherme from "@/images/avatarGuilherme.webp"
// import avatarSusana from "@/images/avatarSusana.webp"
// import avatarJampa from "@/images/avatarJampa.png"

interface feedback {
	name: string
	role: string
	text: string
	avatar: string // Alterado de StaticImageData para string
}

export const feedback: feedback[] = [
	// Adiciona o tipo ao array para checagem
	{
		// Use o caminho público relativo à pasta 'public'
		avatar: "/images/avatarJampa.png",
		name: "Mãe do jampa",
		role: "Mãe dele",
		text: "Meu filho é um gênio!",
	},
	{
		// Use o caminho público relativo à pasta 'public'
		avatar: "/images/avatarGuilherme.webp",
		name: "Guilherme Veroneze",
		role: "Desenvolvedor",
		text: "Graças ao nutricionista João Paulo, consegui perder cerca de 5kg em menos de um mês. Além disso, o plano alimentar me ajudou a regular minha rotina, melhorando meu sono e me dando mais disposição durante a semana.",
	},
	{
		// Use o caminho público relativo à pasta 'public'
		avatar: "/images/avatarSusana.webp",
		name: "Susana Machado",
		role: "Vendedora",
		text: "Eu estava desanimada, acima do peso e totalmente perdida com dietas que não funcionavam. Encontrar você foi um divisor de águas! Aprendi a comer com prazer, sem culpa, e o acompanhamento olhou para minha rotina e minhas emoções. Hoje tenho mais energia, minha autoestima voltou e fiz as pazes com a comida. Recomendo de olhos fechados!",
	},
]
