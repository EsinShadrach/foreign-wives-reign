"use client";
import React, { MouseEvent } from "react";

interface RippleButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	rippleColor?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function RippleButton({
	children,
	onClick,
	className,
	rippleColor,
	...props
}: RippleButtonProps) {
	const rippleEffect = (event: MouseEvent<HTMLButtonElement>) => {
		const btn = event.currentTarget;

		const circle = document.createElement("span");
		const diameter = Math.max(btn.clientWidth, btn.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
		circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
		circle.classList.add("ripple");
		if (rippleColor) {
			circle.classList.add(rippleColor);
		} else {
			circle.classList.add("bg-white/70");
		}

		const ripple = btn.getElementsByClassName("ripple")[0];

		if (ripple) {
			ripple.remove();
		}

		btn.appendChild(circle);
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<button
			{...props}
			onClick={rippleEffect}
			className={`${className} relative overflow-hidden transition-all duration-300 min-w-max`}
		>
			{children}
			<span className="" />
		</button>
	);
}

export default RippleButton;
