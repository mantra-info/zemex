import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="w-full min-h-10/12 bg-black flex flex-col lg:flex-row items-stretch">
      {/* LEFT SECTION: VIDEO */}
     
      <div className="hidden md:block w-full  lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute self-baseline-last inset-0 w-full h-full object-contain"
        >
          <source src="about.mp4" type="video/mp4" />
        </video>
        {/* Shadow to blend video into the right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:to-black/40" />
      </div>

      {/* RIGHT SECTION: TEXT CONTENT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-black">
        <div className="flex flex-col items-start text-left max-w-xl">
          {/* Badge */}
          <span className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-6">
            About Us
          </span>

          {/* Heading */}
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Crafted with Care,
            <br />
            Chosen with Trust
          </h2>

          {/* Paragraph */}
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            We are a fast-moving consumer goods company dedicated to delivering
            everyday products that people trust and rely on. From personal care
            to household essentials, our focus is on quality, consistency, and value.
          </p>

          {/* Button */}
          <button className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
            Know More About Us
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </button>
        </div>
      </div>
    </section>
  );
}