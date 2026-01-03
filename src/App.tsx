import Header from './components/Header'
import Hero from './components/Hero'
import WorkoutTypes from './components/WorkoutTypes'
import Benefits from './components/Benefits'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <WorkoutTypes />
      <Benefits />
      <Programs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
