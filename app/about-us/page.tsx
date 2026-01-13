import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';


const AboutPage = () => {
  const values = [
    {
      title: "Quality You Can Trust",
      description: "Every product is developed and tested to meet the highest standards of safety and performance.",
      image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Innovation with Purpose",
      description: "We invest in research and development to create smarter, more sustainable solutions.",
      image: "https://images.unsplash.com/photo-1579152276506-5d5ef769b320?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sustainability in Action",
      description: "We are committed to responsible sourcing, waste reduction, and environmentally conscious operations.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "People & Communities",
      description: "We believe businesses grow best when people and communities grow with them.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      <section className=" bg-[#0d1b3e] pt-6 pb-48 px-6">
        <div className="max-w-7xl mx-auto">

          <nav className="relative flex items-center space-x-2 text-sm text-gray-400 mb-16">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white font-medium">About</span>
          </nav>


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


      <div className="max-w-7xl mx-auto px-6 -mt-36 relative z-10">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="relative w-full h-[400px] md:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=2000"
              alt="Product showcase"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

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


      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#374151] text-center mb-16">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">

                <div className="h-52 overflow-hidden relative">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

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
      <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden max-w-7xl mx-auto px-6 lg:-mt-36  z-10 mt-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">

                <Image
                  src="/joy.png"
                  alt="Joy CEO"
                  width={300}
                  height={450}
                  className="w-full h-auto object-contain p-5"
                  priority
                />


                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
              </div>
            </div>
            <div className="relative">

              <div
                className="absolute -top-16 -left-10 w-40 h-40 z-0 opacity-50 select-none pointer-events-none"
                style={{
                  backgroundImage: "url('/Quote_shape.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
                  From the Founder
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
                  From day one, our focus has been on doing things the right way.
                  That means planning thoroughly, communicating openly, prioritizing
                  safety, and taking full responsibility for every project we undertake.
                  We don't cut corners, and we don't make promises we can't keep.
                </p>

                <div>
                  <p className="text-xl font-bold text-[#ef4444]">Joy Joseph</p>
                  <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase">
                    Chairman and MD of Sevana Groups
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;