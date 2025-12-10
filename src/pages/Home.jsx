import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Products from "../sections/Products";
function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Intro />
			<Products />
		</div>
	);
}

export default Home;