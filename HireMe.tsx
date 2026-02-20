import React from 'react';

const HireMe: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-[#E63946] text-4xl md:text-5xl font-serif mb-4">Hire Ananya</h2>
        <p className="text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-10">Make things work like magic</p>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[#777777] text-sm uppercase tracking-wider">Email Me</p>
            <a 
              href="mailto:anvishwakarma52@gmail.com" 
              className="text-2xl md:text-3xl font-light hover:text-[#E63946] transition-colors duration-300 break-all"
            >
              anvishwakarma52@gmail.com
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-[#777777] text-sm uppercase tracking-wider">Call Me</p>
            <a 
              href="tel:+918178372868" 
              className="text-2xl md:text-3xl font-light hover:text-[#E63946] transition-colors duration-300"
            >
              +91-8178372868
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;