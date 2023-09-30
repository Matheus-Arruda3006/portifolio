import { BrowserRouter } from "react-router-dom";
import AboutMe from '../src/components/About'
import ContactMe from '../src/components/Contact'
import Experience from '../src/components/Experience'
import Feedbacks from '../src/components/Feedbacks'
import Hero from '../src/components/Hero'
import Loader from '../src/components/Loader'
import Navbar from '../src/components/Navbar'
import Tech from '../src/components/Tech'
import Works from '../src/components/Works'
import StarCanvas from '../src/components/canvas/Stars'

const App = () => {
 

  return (
    <>
     
     <BrowserRouter>
          <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg center">
                  <Navbar/>
                  <Hero/>
              </div>
              <AboutMe/>
              <Experience/>
              <Tech/>
              <Works/>
              <Feedbacks/>
              <div className="relative z-0">
                <ContactMe/>
                <StarCanvas/>
              </div>
          </div>
     </BrowserRouter>
    </>
  )
}

export default App
