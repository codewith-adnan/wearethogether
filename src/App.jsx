
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import WhyUs from './components/Whyus';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <WhyUs />
        <Services />
        <Footer />
      </main>

    </div>
  );
}

export default App;