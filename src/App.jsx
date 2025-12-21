import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './LandingPages/pages/HomePage'
import ProductPageInfo from './LandingPages/pages/ProductPageInfo';
import Navbar from './LandingPages/components/Navbar';
import Footer from './LandingPages/components/sections/Footer';
import NotFound from './shared/layout/NotFound';
import ScrollToTop from './shared/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='px-[16px] md:px-[30px] pb-[20px] overflow-hidden'>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPageInfo />} />
            <Route path="*" element={<NotFound />} />
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
