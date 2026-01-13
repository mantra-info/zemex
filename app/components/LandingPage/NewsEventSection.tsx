"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function NewsEventsSection() {
  const newsItems = [
    {
      date: "1 Dec 2025",
      title: "Shaping the Future of Everyday Living Through Innovation",
      image: "/foodnbeverages.jpg"
    },
    {
      date: "20 Nov 2025",
      title: "Inside the Technology That Makes Everyday Tasks Easier",
      image: "/appliance.jpg"
    },
    {
      date: "02 Nov 2025",
      title: "Glow Begins Here: The Secret Behind Radiant Skin",
      image: "/glowradiant.jpg"
    }
  ];

  return (
    <section className="w-full bg-[#152961] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
       
        <div className="mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white/90 text-sm font-medium">News&Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Latest updates from our
            <br />
            company and brands.
          </h2>
          <p className="text-white/70 text-lg max-w-3xl">
            Explore our latest news, events, and company updates as we continue to grow and innovate.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden"
            >

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-white/60 text-sm mb-3">{item.date}</p>
                <h3 className="text-white text-xl font-semibold leading-snug group-hover:text-white/90 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="flex justify-center">
          <button className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white hover:text-[#1e3a8a] transition-all duration-300">
            Read More Updates
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