import React from "react";

function KenyaShowcase() {
	const imageUrl = 'url("/fwr-kenya-showcase.png")';
	return (
		<section
			className="flex items-center justify-center"
			style={{
				backgroundImage: imageUrl,
				height: "488px",
				padding: "2rem",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100%",
				marginBottom: "2rem",
			}}
		>
			<h2 className="text-white font-bold text-[4rem]">Karibu Jisikie</h2>
		</section>
	);
}

export default KenyaShowcase;
