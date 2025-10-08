// src/components/WhyUs.jsx

import React from 'react';
import aboutVideo from '../assets/intorduction.mp4'; 

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">

          <div className="md:w-1/2">
            <video 
              src={aboutVideo} 
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-xl w-full"
            >
              Aapka browser video tag ko support nahi karta.
            </video>
          </div>

          <div className="md:w-1/2 text-gray-600 space-y-6">
            <div className="mb-6 text-center md:text-left">
              <h2 className="text-3xl font-bold text-dark mb-4">Why Us</h2>
              <div className="w-24 h-1 bg-primary mx-auto md:mx-0"></div>
            </div>

            <p>
              At The Technical Doctors, expertise is not just a claim—it's a standard. Every technician on our team is a certified diploma holder with over five years of hands-on experience, ensuring your needs are handled by seasoned professionals.
            </p>
            <p>
              Our commitment to excellence extends beyond technical skills—our team is available 100% of the time, ready to respond promptly and efficiently. We uphold the highest level of professionalism, with staff who are not only skilled but also well-mannered and respectful. With us, you're not just hiring a service—you're welcoming reliability, experience, and integrity into your space.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
