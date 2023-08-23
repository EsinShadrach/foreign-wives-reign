import bgImage from "@/public/ghana-wives-bg.jpeg";
import airplane from "@/public/images/airplane.jpeg";
import airport from "@/public/images/airport.jpeg";
import elephants from "@/public/images/akwaaba.jpeg";
import grass1 from "@/public/images/grass-1.jpeg";
import grass2 from "@/public/images/grass-2.jpeg";
import { H2, H3, P } from "@/utils/typography";
import Image from "next/image";
import "swiper/css";
import { LearnMoreButton } from "@/utils/LearnMore";
import { Carousel } from "./CardProps";
import couple from "@/public/images/couple.jpeg";
import womanSmiling from "@/public/images/woman-smiling.jpeg";

export default function Page() {
	return (
		<main>
			<div className="space-y-4 overflow-x-hidden">
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
			<section className="container mx-auto p-2">
				<div className="flex md:mt-28 items-center justify-around md:gap-32 flex-col md:flex-row gap-6 mt-10">
					<div className="relative max-w-md w-full">
						<Image
							src={airplane}
							alt="Airport"
							className="rounded-lg w-full max-w-md"
							draggable={"false"}
						/>
						<Image
							src={airport}
							height={224}
							alt="Airplane"
							className="rounded-lg absolute -top-20 -right-20 max-w-xs h-56 object-cover md:block hidden"
							draggable={"false"}
						/>
					</div>
					<div className="w-full max-w-md space-y-4">
						<H2>Plan your trips and airport needs</H2>
						<P>
							Life is meant to be easy and soft, and with use we
							can give you such life
						</P>
						<LearnMoreButton variant="black" />
					</div>
				</div>
				<div className="flex md:mt-28 items-center justify-around flex-col md:flex-row-reverse gap-6 mt-10">
					<div className="relative max-w-md w-full">
						<Image
							src={grass1}
							alt="indoors"
							height={384}
							className="rounded-lg w-full max-w-md object-cover h-96"
							draggable={"false"}
						/>
						<Image
							src={grass2}
							alt="indoors-2"
							height={224}
							className="rounded-lg absolute -bottom-10 -right-10 max-w-xs h-56 object-cover md:block hidden"
							draggable={"false"}
						/>
					</div>
					<div className="w-full max-w-md space-y-4">
						<H2>Plan your trips and airport needs</H2>
						<P>
							Life is meant to be easy and soft, and with use we
							can give you such life
						</P>
						<LearnMoreButton variant="black" />
					</div>
				</div>
			</section>
			<div className="bg-black md:mt-20 mt-10 text-white">
				<Carousel />
				<section className="py-10 container mx-auto p-2">
					<div className="max-w-xs space-y-4">
						<H2>Meet friends, join groups and connect</H2>
						<P>
							with our group support feature you can meet people
							and connect
						</P>
						<LearnMoreButton variant="white" />
					</div>
					<div className="relative max-w-md w-full md:mt-20 mt-10">
						<Image
							src={couple}
							placeholder="blur"
							alt="A couple kissing"
							className="rounded-lg w-full max-w-md h-96 object-cover"
							draggable={"false"}
						/>
						<Image
							src={womanSmiling}
							// height={224}
							placeholder="blur"
							alt="A woman smiling"
							className="rounded-lg absolute -top-44 -right-44 max-w-xs object-cover md:block hidden h-80 object-top"
							draggable={"false"}
						/>
					</div>
				</section>
			</div>
		</main>
	);
}
