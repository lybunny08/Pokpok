import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './LandingPages/pages/Home'
import ProductPageInfo from './LandingPages/pages/ProductPageInfo';
import Navbar from './LandingPages/components/Navbar';

function App() {
  return (
    <Router>
      <div className='overflow-hidden'>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPageInfo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
