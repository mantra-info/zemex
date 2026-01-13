"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animation";

export default function AboutSection() {
  return (
    <section className="w-full bg-black flex flex-col lg:flex-row">
      

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden md:block w-full lg:w-1/2 h-[50vh] relative"
      >
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-contain">
          <source src="about.mp4" type="video/mp4" />
        </video>
      </motion.div>

 
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24"
      >
        <motion.span variants={fadeUp} className="mb-6 inline-block">
          About Us
        </motion.span>

        <motion.h2 variants={fadeUp} className="text-white text-5xl font-bold mb-6">
          Crafted with Care,<br />Chosen with Trust
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-400 mb-8">
          We are a fast-moving consumer goods company dedicated to delivering everyday products.
        </motion.p>

        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 rounded-full border text-white"
        >
          Know More About Us
        </motion.button>
      </motion.div>
    </section>
  );
}
