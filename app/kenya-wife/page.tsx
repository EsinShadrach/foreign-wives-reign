import Footer from "@/components/kenya-wife/Footer";
import bgImage from "@/public/kenya-wives-head.jpeg";
import Image from "next/image";
import elephant from "@/public/images/two-elephants.jpg";

function page() {
	return (
		<main>
			<Image
				src={bgImage}
				alt="kenya-wives-bg"
				priority={true}
				quality={100}
			/>
			<div className="relative">
				<Image
					src={elephant}
					alt="Two Elephants"
					quality={100}
					width={896}
					className="mx-auto mt-3"
				/>
			</div>
			{/* <KenyaShowcase />
			<KenyaTrip />
			<KenyaParks />
			<KenyaCities />
			<KenyaMeet /> */}
			<Footer />
		</main>
	);
}

export default page;
