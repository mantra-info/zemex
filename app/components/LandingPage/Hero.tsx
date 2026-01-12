"use client";
import { motion } from "framer-motion";
import { fadeUp, fade } from "@/lib/animation";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Navbar />

      {/* Video */}
      <motion.div
        variants={fade}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="foodnbeverages.jpg"
          className="w-full h-full object-cover opacity-90 brightness-75"
        >
          <source src="/herozemex.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Text */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-20 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white text-5xl md:text-7xl font-semibold leading-[1.05]"
        >
          Building Brands That <br className="hidden md:block" />
          Shape Everyday Life
        </motion.h1>
      </div>
    </section>
  );
}
