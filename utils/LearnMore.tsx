interface LearnMoreBtn {
	variant: "black" | "white";
}

export function LearnMoreButton({ variant }: LearnMoreBtn) {
	return (
		<div>
			<button
				className={`border-2 rounded-full py-1.5 px-3 text-sm  transition-all duration-300 focus:outline-none outline-none ${
					variant === "white"
						? "text-white border-white hover:text-black hover:bg-white"
						: "border-black text-black hover:bg-black hover:text-white"
				}`}
			>
				Learn More
			</button>
		</div>
	);
}
