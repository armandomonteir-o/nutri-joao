"use client"
import { useState, useRef, useEffect, ReactNode } from "react"

interface LazyLoadSectionProps {
	children: ReactNode
	className?: string
}

// Este componente age como um "portão". Ele só renderiza seus filhos
// quando ele mesmo entra na tela.
export default function LazyLoadSection({
	children,
	className = "",
}: LazyLoadSectionProps) {
	const [isIntersecting, setIsIntersecting] = useState(false)
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsIntersecting(true)
					if (ref.current) {
						observer.unobserve(ref.current)
					}
				}
			},
			{
				rootMargin: "200px",
			}
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [])

	// A div precisa ter uma altura mínima para que o IntersectionObserver funcione!
	// A classe `.section` já define isso para nós.
	return (
		<div ref={ref} className={className}>
			{isIntersecting ? children : null}
		</div>
	)
}
