// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-scroll';

import heroImage from '../assets/Home.jpeg'; 

const Home = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 bg-blue-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight">
            The <span className="text-primary">Technical</span> Doctor's
          </h1>
          <p className="mt-5 text-lg text-gray-600 mb-[-3px]">We Are Together (Private Limited)</p>
          <p className="mt-3 text-gray-700 max-w-lg">
            Delivering more than just services—we deliver peace of mind. Your trusted partner for technical solutions.
          </p>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            className="mt-8 inline-block bg-blue-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-900 transition duration-300 cursor-pointer"
          >
            Explore Our Services
          </Link>
        </div>
        
       <div className="md:w-1/2 mt-10 md:mt-0">
          <img 
            src={heroImage} 
            alt="Team meeting" 
            className="rounded-lg shadow-xl w-full h-100 object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default Home;