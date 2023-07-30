import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience,Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About /> 
        <Experience />   
        <Tech />
        <Works />
        <div className='relative z-0'> {/* we need this to displat 3d stars object */}
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;