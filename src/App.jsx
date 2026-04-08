
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import WhyUs from './components/Whyus';
import Services from './components/Services';
import Footer from './components/Footer';
import Clients from './components/Clients';
import PartnersSection from './components/PartnersSection';
import Work from './components/Work';


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <Clients />
        <PartnersSection />
        <About />
        <WhyUs />
        <Services />
        <Work />
        <Footer />
      </main>

    </div>
  );
}

export default App;