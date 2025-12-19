import Navbar from "../../components/Navbar";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Bestseller from "../sections/Bestseller";
import CategorySection from "../sections/CategorySection"
import Footer from "../sections/Footer"
import Testimonials from "../sections/Testimonials"
import Journale from "../sections/Journale";
import NewProduct from "../sections/NewProduct";
import Featured from "../sections/Featured";
import Information from "../sections/Information";
import Promotion from "../sections/Promotion";
function Home() {
	return (
		<div className="px-[30px] pb-[20px] flex flex-col gap-[90px] ">
			<Hero />
			{/* <Intro /> */}
			<Bestseller />
			<CategorySection />
			<Featured></Featured>
			<NewProduct />
			<Journale />
			<Information />
			<Promotion />
			<Testimonials />
			<Footer />
		</div>
	);
}

export default Home;