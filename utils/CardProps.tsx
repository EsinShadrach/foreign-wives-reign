"use client";
import { H3, Text } from "@/utils/typography";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardProps } from "../app/types";

function Card({ image, location, href = "#", alt }: CardProps) {
	return (
		<Link href={href}>
			<div className="max-w-md rounded-lg h-52 group relative overflow-hidden cursor-pointer mx-auto">
				<div className="rounded-full border-white border-2 p-2 w-fit ml-auto transition-all duration-300 -translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 absolute right-2 top-2 z-10">
					<ArrowUpRightIcon className="h-4 w-4 text-white" />
				</div>
				<div className="bg-black/20 inset-0 absolute group-hover:opacity-100 opacity-0 transition-all duration-300 z-10" />
				<Image
					width={448}
					// height={208}
					src={image}
					alt={alt}
					priority={true}
					quality={100}
					placeholder={"blur"}
					className="object-cover group-hover:scale-105 transition-all duration-300 h-full"
				/>
				<Text className="absolute bottom-0 flex justify-center items-center inset-x-0 py-2 bg-gradient-to-t from-black via-black/70">
					{location}
				</Text>
			</div>
		</Link>
	);
}
export function Carousel({ carouselItems }: { carouselItems: CardProps[] }) {
	return (
		<section className="container ml-auto p-2 py-10">
			<H3 className="w-full max-w-sm text-center mx-auto">
				Sit back and lets take you on a journey of a life time
			</H3>
			<Swiper
				className="mt-6 flex justify-end items-center"
				spaceBetween={16}
				breakpoints={{
					640: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 4,
					},
				}}
			>
				{carouselItems.map((card, index) => (
					<SwiperSlide
						className="flex items-center justify-center w-fit"
						key={index}
					>
						<Card {...card} key={index} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
