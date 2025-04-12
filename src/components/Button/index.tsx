import React from "react"
import styles from "./Button.module.css"

interface IButtonProps {
	type?: "submit" | "button"
	className?: string
	variant?: "primary" | "secondary" | "thirdary"
	children: React.ReactNode
	onClick?: () => void
	scrollTo?: string
}

export default function Button({
	type = "button",
	className = "",
	variant = "primary",
	children,
	onClick,
	scrollTo,
}: IButtonProps) {
	const handleClick = () => {
		if (scrollTo) {
			const targetSection = document.querySelector(`.${scrollTo}`)
			if (targetSection) {
				targetSection.scrollIntoView({ behavior: "smooth" })
			}
		}
		if (onClick) {
			onClick()
		}
	}

	return (
		<button
			type={type}
			className={`${styles.button} ${styles[variant]} ${className}`}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}
