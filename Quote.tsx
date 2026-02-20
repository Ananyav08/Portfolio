
import React from 'react';

const Quote: React.FC = () => {
  return (
    <div className="py-32 bg-[#F2F2F2] border-y border-black/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-20 h-[1px] bg-[#E63946] mx-auto mb-16"></div>
        <blockquote className="font-serif text-3xl md:text-5xl italic text-[#1A1A1A] leading-snug">
          “Overthinking is the key in Designing”
        </blockquote>
        <p className="mt-8 text-[12px] uppercase tracking-[3px] font-bold text-[#777777]">
          — Ananya Vishwakarma
        </p>
        <div className="w-20 h-[1px] bg-[#E63946] mx-auto mt-16"></div>
      </div>
    </div>
  );
};

export default Quote;
