interface LearnMoreBtn {
	variant: "black" | "white" | "yellow";
}

export function LearnMoreButton({ variant }: LearnMoreBtn) {
	function handleVariants() {
		if (variant === "black") {
			let tw = "text-black border-black hover:bg-black hover:text-white";
			return tw;
		}
		if (variant === "white") {
			let tw = "text-white border-white hover:bg-white hover:text-black";
			return tw;
		}
		if (variant === "yellow") {
			let tw =
				"text-brand-gambia-primary border-brand-gambia-primary hover:bg-brand-gambia-primary hover:text-white";
			return tw;
		}
	}

	return (
		<div>
			<button
				className={`border-2 rounded-full py-1.5 px-3 text-sm  transition-all duration-300 focus:outline-none outline-none ${handleVariants()}`}
			>
				Learn More
			</button>
		</div>
	);
}
