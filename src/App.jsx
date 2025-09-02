import './App.css'
import About from './components/About'
import ContactUs from './components/Contact-us'
import Features from './components/Features'
import Footer from './components/Footer'
// import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Story from './components/Story'


const App = () => {
  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <ContactUs />
      <Footer />
    </main>
    </>
  )
}

export default App