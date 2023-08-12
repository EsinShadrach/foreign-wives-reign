import Footer from "@/components/kenya-wife/Footer";
import KenyaCities from "@/components/kenya-wife/KenyaCities";
import KenyaMeet from "@/components/kenya-wife/KenyaMeet";
import KenyaParks from "@/components/kenya-wife/KenyaParks";
import KenyaShowcase from "@/components/kenya-wife/KenyaShowcase";
import KenyaTrip from "@/components/kenya-wife/KenyaTrip";
import bgImage from "@/public/kenya-wives-head.jpeg";
import Image from "next/image";

function page() {
	return (
		<main>
			<Image
				src={bgImage}
				alt="kenya-wives-bg"
				priority={true}
				quality={100}
			/>
			<KenyaShowcase />
			<KenyaTrip />
			<KenyaParks />
			<KenyaCities />
			<KenyaMeet />
			<Footer />
		</main>
	);
}

export default page;
