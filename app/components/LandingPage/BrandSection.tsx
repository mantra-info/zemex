"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BrandsSection() {
  const categories = [
    {
      title: "Food & Beverages",
      image: "/foodnbeverages.jpg",
      gradient: "from-orange-500/20 to-transparent"
    },
    {
      title: "Mini Home Appliances",
      image: "/minihomeappliance.jpg",
      gradient: "from-red-500/20 to-transparent"
    },
    {
      title: "Health & Personal Care",
      image: "/healthpersonal.jpg",
      gradient: "from-blue-500/20 to-transparent"
    },
    {
      title: "Home Care",
      image: "/homecare.jpg",
      gradient: "from-green-500/20 to-transparent"
    },
    {
      title: "Hospitality Services",
      image: "/hospitality.jpg",
      gradient: "from-amber-500/20 to-transparent"
    },
    {
      title: "Consumer & Electronics",
      image: "/consumer.jpg",
      gradient: "from-purple-500/20 to-transparent"
    }
  ];

  const brands = [
    { name: "SEVANA", img: "/sevana.png" },
    { name: "SK wash", img: "/assamapple.png" },
    { name: "BEST TEA", img: "/amma.png" },
    { name: "Pimna", img: "/petercook.png" },
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Brands That Define
            <br />
            Everyday Living
          </h2>
          <p className="text-gray-600 text-lg">
            Each is crafted to enhance everyday living with care and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.slice(0, 4).map((category, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden h-64 group cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} to-black/60`} />
              <div className="absolute bottom-6 left-6 right-6 ">
                <h3 className="text-white text-xl md:text-xl font-semibold">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          {categories.slice(4, 6).map((category, index) => (
            <div
              key={index + 4}
              className="relative rounded-3xl overflow-hidden h-64 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] group cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} to-black/60`} />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Framer Motion Marquee */}
        <div className="overflow-hidden py-8 mb-16">
          <motion.div
            className="flex"
            animate={{
              x: [0, -100 / 3 + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center mx-8 sm:mx-12"
              >
                <div className="w-40 sm:w-48 md:w-60 h-20 sm:h-24 flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative rounded-3xl overflow-hidden h-96 md:h-[500px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/bodylotion.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl">
              Each is crafted to enhance everyday living
              <br className="hidden sm:block" />
              with care and precision.
            </h3>
            <button className="group flex items-center gap-3 px-6 sm:px-8 py-3 rounded-full border-2 border-white/50 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
              Explore Our Products
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform" 
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}