import Navbar from "../../components/Navbar";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Products from "../sections/Products";
import CategorySection from "../sections/Category_section"
import Footer from "../sections/Footer"
import Testimonials from "../sections/Testimonials"
function Home() {
	return (
		<div className="px-[30px] pb-[80px] flex flex-col gap-[80px] ">
			<Hero />
			<Intro />
			<Products />
			<CategorySection />
			<Testimonials />
			<Footer />
		</div>
	);
}

export default Home;