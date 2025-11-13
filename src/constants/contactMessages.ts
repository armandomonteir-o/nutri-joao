interface ContactMessage {
	id: string
	message: string
}

const phoneNumber = "5524998416823"

export const contactMessages: ContactMessage[] = [
	{
		id: "conheca-mais",
		message: `Olá, João Paulo! Acabei de ler sobre a SlimMind e me interessei muito pelo projeto. Gostaria de conversar sobre uma possível parceria!`,
	},
	{
		id: "entre-em-contato",
		message: `Olá, João Paulo! Acabei de ver o seu site e fiquei interessado em sua metodologia de trabalho. Gostaria de saber mais!`,
	},
]

/**
 * Função auxiliar para gerar o link do WhatsApp
 * @param message - A mensagem a ser enviada.
 * @returns A URL completa do WhatsApp.
 */
export const generateWhatsAppLink = (message: string): string => {
	return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
