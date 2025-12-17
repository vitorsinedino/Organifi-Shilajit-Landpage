import './App.scss'
import Ensurance from './components/Ensurance'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Himalaya from './components/Himalaya'
import IconList from './components/IconList'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Reviews from './components/Reviews'
import YummyGummy from './components/YummyGummy'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "swiper/css/pagination";
import Questions from './components/Questions'

function App() {

  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <IconList /> 
      </header>
      <main>
        <Himalaya />
        <YummyGummy />
        <Ensurance />
        <Reviews />
        <Product />
        <Questions />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
