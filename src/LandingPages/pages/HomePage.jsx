import Hero from "../components/sections/Hero"
import Bestseller from "../components/sections/Bestseller";
import CategorySection from "../components/sections/CategorySection"
import Testimonials from "../components/sections/Testimonials"
import Journale from "../components/sections/Journale";
import NewProduct from "../components/sections/NewProduct";
import Featured from "../components/sections/Featured";
import Information from "../components/sections/Information";
import Promotion from "../components/sections/Promotion";
function HomePage() {
	return (
		<div className="flex flex-col gap-[60px] md:gap-[90px] ">
			<Hero />
			<Bestseller />
			<CategorySection />
			<Featured />
			<NewProduct />
			<Journale />
			<Information />
			<Promotion />
			<Testimonials />
		</div>
	);
}

export default HomePage;