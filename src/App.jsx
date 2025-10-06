
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import WhyUs from './components/Whyus';
import Services from './components/Services';
import Contact from './components/getus';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <WhyUs />
        <Services />
        <Contact/>
      </main>

    </div>
  );
}

export default App;