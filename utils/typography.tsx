import React from "react";

interface TypographyProps extends React.HTMLProps<HTMLHeadingElement> {
	children?: React.ReactNode;
	className?: string;
}

export function H1({ children, className, ...props }: TypographyProps) {
	return (
		<h1
			className={`sm:text-4xl text-3xl font-bold ${className}`}
			{...props}
		>
			{children}
		</h1>
	);
}

export function H2({ children, className, ...props }: TypographyProps) {
	return (
		<h2
			className={`sm:text-3xl text-2xl font-semibold ${className}`}
			{...props}
		>
			{children}
		</h2>
	);
}

export function H3({ children, className, ...props }: TypographyProps) {
	return (
		<h3
			className={`sm:text-2xl text-xl font-semibold ${className}`}
			{...props}
		>
			{children}
		</h3>
	);
}

export function P({ children, className, ...props }: TypographyProps) {
	return (
		<p className={`sm:text-base text-sm ${className}`} {...props}>
			{children}
		</p>
	);
}

export function Text({ children, className, ...props }: TypographyProps) {
	return (
		<span className={`sm:text-base text-sm ${className}`} {...props}>
			{children}
		</span>
	);
}
