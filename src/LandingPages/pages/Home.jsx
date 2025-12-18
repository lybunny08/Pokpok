import Navbar from "../../components/Navbar";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Bestseller from "../sections/Bestseller";
import CategorySection from "../sections/Category_section"
import Footer from "../sections/Footer"
import Testimonials from "../sections/Testimonials"
import Journale from "../sections/Journale";
import NewProduct from "../sections/New_product";
import Featured from "../sections/Featured";
import Information from "../sections/Information";
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
			<Testimonials />
			<Footer />
		</div>
	);
}

export default Home;