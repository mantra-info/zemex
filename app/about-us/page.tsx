import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '@/components/Navbar';


const AboutPage = () => {
  const values = [
    {
      title: "Quality You Can Trust",
      description: "Every product is developed and tested to meet the highest standards of safety and performance.",
      image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=800" // Placeholder for glowing icon image
    },
    {
      title: "Innovation with Purpose",
      description: "We invest in research and development to create smarter, more sustainable solutions.",
      image: "https://images.unsplash.com/photo-1579152276506-5d5ef769b320?auto=format&fit=crop&q=80&w=800" // Placeholder for scientist image
    },
    {
      title: "Sustainability in Action",
      description: "We are committed to responsible sourcing, waste reduction, and environmentally conscious operations.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" // Placeholder for sprout globe
    },
    {
      title: "People & Communities",
      description: "We believe businesses grow best when people and communities grow with them.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" // Placeholder for community image
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
    
      <section className=" bg-[#0d1b3e] pt-6 pb-48 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="relative flex items-center space-x-2 text-sm text-gray-400 mb-16">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white font-medium">About</span>
          </nav>

          {/* Heading Area */}
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
              About Us
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-5xl font-semibold text-white leading-[1.15] max-w-4xl mx-auto">
              Purpose at the Heart of<br />Everything We Do
            </h1>
          </div>
        </div>
      </section>

      {/* Overlapping Hero Image */}
      <div className="max-w-7xl mx-auto px-6 -mt-36 relative z-10">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=2000" 
            alt="Product showcase"
            className="w-full h-[400px] md:h-[600px] object-cover"
          />
        </div>
      </div>

      {/* Narrative Text Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <p className="text-[#4b5563] text-lg leading-relaxed">
            We are a fast-moving consumer goods company dedicated to making everyday life better through trusted, high-quality products. From personal care and home essentials to food and wellness solutions, our brands are designed to meet the real needs of millions of consumers—every day, everywhere.
          </p>
          <p className="text-[#4b5563] text-lg leading-relaxed">
            With a strong focus on innovation, quality, and sustainability, we combine global expertise with local insight to create products that people rely on and love. Our commitment goes beyond products—we strive to operate responsibly, reduce our environmental footprint, and contribute positively to the communities we serve.
          </p>
          <p className="text-[#4b5563] text-lg leading-relaxed">
            Driven by purpose and powered by people, we continuously evolve to meet changing consumer expectations while staying true to our core values: integrity, care, and excellence. Our goal is simple yet powerful—to deliver value that improves lives today and builds a better future for tomorrow.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#374151] text-center mb-16">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
                {/* Card Image */}
                <div className="h-52 overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default AboutPage;