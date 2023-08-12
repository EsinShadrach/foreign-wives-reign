import Image from "next/image";
import bgImage from "@/public/ghana-wives-bg.jpeg";

export default function Page() {
	return (
		<main>
			<Image
				src={bgImage}
				alt="ghana-wives-bg"
				priority={true}
				quality={100}
			/>
			<section className="container mx-auto px-2"></section>
		</main>
	);
}
