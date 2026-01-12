"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import {motion} from 'framer-motion'
export default function SelfCareCTA() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
           <motion.h2
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}className="text-5xl md:text-6xl lg:text-6xl font-semibold text-black leading-tight">
              Because self-care
              <br />
              is not a luxury
            </motion.h2>
            
            <button className="group flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              View Products
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform" 
              />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
             <motion.img
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  src="/Cosmetics.png"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}