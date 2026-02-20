import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Copyright Information */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-[#777777] text-[11px] tracking-widest uppercase text-center font-medium">
            © {new Date().getFullYear()} Ananya Vishwakarma. All Rights Reserved.
          </div>
          <div className="text-[#777777]/30 text-[9px] tracking-widest uppercase font-serif italic">
            Sophisticated • Minimal • Premium
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;