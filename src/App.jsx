import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './LandingPages/pages/Home'
import ProductPageInfo from './LandingPages/pages/ProductPageInfo';
import Navbar from './LandingPages/components/Navbar';
import Footer from './LandingPages/components/sections/Footer';

function App() {
  return (
    <Router>
      <div className='px-[16px] md:px-[30px] pb-[20px] overflow-hidden'>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPageInfo />} />
          </Routes>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
}
export default App;
