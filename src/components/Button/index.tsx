import React from "react"
import styles from "./Button.module.css"

interface IButtonProps {
	type?: "submit" | "button"
	className?: string
	variant?: "primary" | "secondary" | "thirdary"
	children: React.ReactNode
	onClick?: () => void
}

export default function Button({
	type = "button",
	className = "",
	variant = "primary",
	children,
	onClick,
}: IButtonProps) {
	return (
		<button
			type={type}
			className={`${styles.button} ${styles[variant]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
