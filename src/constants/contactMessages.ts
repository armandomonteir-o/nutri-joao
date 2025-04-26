interface ContactMessage {
	id: string
	message: string
}

// Número de telefone para o qual as mensagens serão enviadas
const phoneNumber = "5524998416823" // Substitua pelo número correto, se necessário

export const contactMessages: ContactMessage[] = [
	{
		id: "conheca-mais",
		message: `Olá, João Paulo! Acabei de ler sobre a SlimMind e me interessei muito pelo projeto. Gostaria de conversar sobre uma possível parceria!`,
	},
	{
		id: "entre-em-contato",
		message: `Olá, João Paulo! Acabei de ver o seu site e fiquei interessado em sua metodologia de trabalho. Gostaria de saber mais!`,
	},
	// Adicione outras mensagens gerais aqui, se necessário
]

/**
 * Função auxiliar para gerar o link do WhatsApp
 * @param message - A mensagem a ser enviada.
 * @returns A URL completa do WhatsApp.
 */
export const generateWhatsAppLink = (message: string): string => {
	return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
