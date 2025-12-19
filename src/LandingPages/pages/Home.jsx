import Hero from "../components/sections/Hero"
import Bestseller from "../components/sections/Bestseller";
import CategorySection from "../components/sections/CategorySection"
import Footer from "../components/sections/Footer"
import Testimonials from "../components/sections/Testimonials"
import Journale from "../components/sections/Journale";
import NewProduct from "../components/sections/NewProduct";
import Featured from "../components/sections/Featured";
import Information from "../components/sections/Information";
import Promotion from "../components/sections/Promotion";
function Home() {
	return (
		<div className="px-[16px] lg:px-[30px] pb-[20px] flex flex-col gap-[60px] lg:gap-[90px] ">
			<Hero />
			<Bestseller />
			<CategorySection />
			<Featured />
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