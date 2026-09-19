import { useState } from 'react'
import Navbar from './componant/Navbar.jsx'
import Landing from './componant/Landing.jsx'
import Stats from './componant/States.jsx'
import Services from './componant/Services.jsx'
import About from './componant/About.jsx'
import Process from './componant/Process.jsx'
import Testimonials from './componant/Testimonials.jsx'
import Contact from './componant/Contact.jsx'
import Footer from './componant/Footer.jsx'


function App() {


  return (

   <div className="min-h-screen scroll-smooth bg-slate-950 font-sans">
    <Navbar />
      <Landing />
      <Stats />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
   
   
  )
}

export default App
