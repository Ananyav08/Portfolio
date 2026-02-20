
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <img 
            src="https://i.ibb.co/cSdk2TPt/Chat-GPT-Image-Jan-29-2026-02-32-07-PM.png" 
            alt="Ananya Vishwakarma Portrait" 
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
          />
          <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none group-hover:m-0 transition-all duration-500"></div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="text-[#E63946] font-serif text-3xl md:text-4xl mb-4">About Ananya Vishwakarma</h2>
        <h3 className="text-xl md:text-2xl font-medium mb-8 text-[#1A1A1A]"></h3>
        
        <div className="space-y-6 text-[#777777] leading-relaxed text-[16px]">
          <p>
            I am a Graphic Designer and Front-end Web Developer. I love to explore and create new things.
          </p>
          <p>
            I live in Ankur Vihar, Ghaziabad, Uttar Pradesh and I study B.Tech in Computer Science (2022-2026)
          </p>
          <p>
            My approach to design is rooted in the belief that simplicity is the ultimate sophistication. I combine technical precision with creative intuition to deliver work that doesn't just look good but communicates effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
