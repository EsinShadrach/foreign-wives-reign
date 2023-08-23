import Footer from "@/components/kenya-wife/Footer";
import bgImage from "@/public/kenya-wives-head.jpeg";
import Image from "next/image";
import elephant from "@/public/images/two-elephants.jpg";
import KenyaShowcase from "@/components/kenya-wife/KenyaShowcase";
import KenyaTrip from "@/components/kenya-wife/KenyaTrip";
import KenyaParks from "@/components/kenya-wife/KenyaParks";
import KenyaCities from "@/components/kenya-wife/KenyaCities";
import KenyaMeet from "@/components/kenya-wife/KenyaMeet";

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
