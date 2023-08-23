import banjul from "@/public/images/banjul.jpeg";
import bgImage from "@/public/images/gambia-wives.jpeg";
import janjangbureh from "@/public/images/janjangbureh.jpeg";
import karibu from "@/public/images/karibu.jpeg";
import kotuBeach from "@/public/images/kotu-beach.jpeg";
import pool from "@/public/images/pool-image.jpeg";
import womanTraveling from "@/public/images/woman-with-traveling-bag.jpeg";
import { LearnMoreButton } from "@/utils/LearnMore";
import { H2, P } from "@/utils/typography";
import Image from "next/image";
import beachImage from "@/public/images/beach-side.jpeg";
import couple from "@/public/images/people-holding-each-other.jpeg";
import { Carousel } from "../../utils/CardProps";
import { CardProps } from "../types";

export const cards: CardProps[] = [
	{ image: banjul, location: "Banjul", href: "#", alt: "Banjul" },
	{ image: kotuBeach, location: "Kotu Beach", href: "#", alt: "Kotu Beach" },
	{
		image: janjangbureh,
		location: "Janjangbureh",
		href: "#",
		alt: "Janjangbureh",
	},
];

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
							Karibu
						</h1>
					</div>
					<Image
						src={karibu}
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
							src={womanTraveling}
							alt="Woman With Traveling Bag"
							className="rounded-lg w-full max-w-md"
							draggable={"false"}
						/>
					</div>
					<div className="w-full max-w-md space-y-4">
						<H2>Plan your trips and airport needs</H2>
						<P>
							Life is meant to be easy and soft, and with use we
							can give you such life
						</P>
						<LearnMoreButton variant="yellow" />
					</div>
				</div>
			</section>
			<div className="bg-brand-gambia-secondary text-white py-12 md:mt-20 mt-">
				<div className="flex items-center justify-around flex-col md:flex-row-reverse gap-6 container mx-auto p-2">
					<div className="relative max-w-md w-full">
						<Image
							src={pool}
							alt="Pool Image"
							placeholder="blur"
							height={384}
							className="rounded-lg w-full max-w-md object-cover h-96"
							draggable={"false"}
						/>
					</div>
					<div className="w-full max-w-md space-y-4">
						<H2>Beautiful and cozy accommodations for you</H2>
						<P>
							With beautiful and tastefully furnished apartments
							we have designed just for you
						</P>
						<LearnMoreButton variant="yellow" />
					</div>
				</div>
			</div>
			<div className="md:mt-20 mt-10 text-white">
				<Carousel carouselItems={cards} />
			</div>
			<div className="bg-brand-gambia-gray px-2 mt-52">
				<Image
					src={beachImage}
					alt="Beach Side Image"
					placeholder="blur"
					quality={100}
					height={384}
					className="w-full max-w-5xl mx-auto h-96 object-cover object-center -translate-y-1/2"
				/>
				<section className=" container mx-auto p-2 -mt-32">
					<div className="flex items-center gap-3 justify-around md:flex-row flex-col">
						<div>
							<Image
								src={couple}
								alt="Couple"
								placeholder="blur"
								draggable={"false"}
								className="w-full max-w-md"
							/>
						</div>
						<div className="w-full max-w-md space-y-4">
							<H2>Meet friends, join groups and connect</H2>
							<P>
								with our group and support feature you can meet
								people and connect
							</P>
							<LearnMoreButton variant="yellow" />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
