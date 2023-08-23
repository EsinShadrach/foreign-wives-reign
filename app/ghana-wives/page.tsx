import Image from "next/image";
import bgImage from "@/public/ghana-wives-bg.jpeg";
import elephants from "@/public/images/akwaaba.jpeg";

export default function Page() {
	return (
		<main>
			<div className="space-y-4">
				<Image
					src={bgImage}
					alt="ghana-wives-bg"
					priority={true}
					quality={100}
					placeholder={"blur"}
				/>
				<div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/30">
					<div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
						<h1 className="text-4xl font-bold text-white">
							Akwaaba
						</h1>
					</div>
					<Image
						src={elephants}
						alt="ghana-wives-bg"
						priority={true}
						quality={100}
						placeholder={"blur"}
						className="w-screen"
					/>
				</div>
			</div>
			<section className="container mx-auto px-2"></section>
		</main>
	);
}
