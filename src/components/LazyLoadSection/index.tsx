"use client"
import { useState, useRef, useEffect, ReactNode } from "react"

interface LazyLoadSectionProps {
	children: ReactNode
	className?: string
}

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

	return (
		<div ref={ref} className={className}>
			{isIntersecting ? children : null}
		</div>
	)
}
