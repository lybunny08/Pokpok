import Home from './LandingPages/pages/Home'
import NavBar from './components/Navbar'
import './App.css'
import Gallerie from './LandingPages/pages/Gallery'

function App() {

  return (
    <div className='overflow-hidden'>
      <>
        <NavBar />
        <Home />
      </>
    </div>
  )
}

export default App
