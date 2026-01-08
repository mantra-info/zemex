
"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
// --- Main Hero Component ---
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Navbar />

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 brightness-75"
        >
          {/* Replace with your video file path */}
          <source src="/kitchen.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Hero Content (Positioned Bottom-Left exactly like image) */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-20 md:px-16 lg:px-24 max-w-[1440px] mx-auto w-full">
        <h1 className="text-white text-5xl md:text-7xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl">
          Building Brands That <br className="hidden md:block" />
          Shape Everyday Life
        </h1>
      </div>
    </section>
  );
}