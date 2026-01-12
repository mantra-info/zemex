"use client";
import React, { useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu
  const [isBrandsOpen, setIsBrandsOpen] = useState(false); // Mobile Accordion
  const [isHovered, setIsHovered] = useState(false); // Desktop Hover

  // Submenu items for Brands
  const brandLinks = [
    { name: "Food & Beverages", slug: "food-beverages" },
    { name: "Mini Home Appliances", slug: "mini-home-appliances" },
    { name: "Health & Personal Care", slug: "health-personal-care" },
    { name: "Home Care", slug: "home-care" },
    { name: "Hospitality", slug: "hospitality" },
    { name: "Consumer & Electronics", slug: "consumer-electronics" },
  ];

  return (
    <>
      <nav className="w-full bg-white flex items-center justify-between px-6 py-8 md:px-16 lg:px-24 sticky top-0 z-[100] border-b border-gray-50">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image src={'/logoblack.png'} width={60} height={40} priority alt="zemex logo"/>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-black text-sm font-medium opacity-90 hover:opacity-100 hover:text-red-600 transition-all">Home</Link>
          <Link href="/about-us" className="text-black text-sm font-medium opacity-90 hover:opacity-100 hover:text-red-600 transition-all">About</Link>
          <Link href="/about-us" className="text-black text-sm font-medium opacity-90 hover:opacity-100 hover:text-red-600 transition-all">Company</Link>
          
          {/* Brands Dropdown with Hover */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="flex items-center gap-1 text-black text-sm font-medium opacity-90 hover:opacity-100 hover:text-red-600 transition-all">
              Brands <ChevronDown size={14} className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
            </button>

            {/* Desktop Dropdown Menu */}
            <div className={`absolute top-full -left-4 pt-6 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden min-w-[240px]">
                {brandLinks.map((item) => (
                  <Link 
                    key={item.slug} 
                    href={`/brands/${item.slug}`}
                    className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 border-b border-gray-50 last:border-0 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/news-events" className="text-black text-sm font-medium opacity-90 hover:opacity-100 hover:text-red-600 transition-all">News & Events</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="#" className="bg-[#C70A10] text-white px-7 py-3 rounded-xl flex items-center gap-2 text-sm font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-100">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-black z-[110] transition-transform active:scale-95"
        >
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div className={`fixed inset-0 bg-black z-[90] flex flex-col transition-all duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} md:hidden overflow-y-auto`}>
        <div className="p-10 pt-24 h-full flex flex-col">
          <p className="text-gray-500 text-[10px] font-bold tracking-[0.3em] mb-8">MENU</p>
          
          <div className="flex flex-col gap-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-white text-2xl font-medium hover:text-red-500">Home</Link>
            <Link href="/about-us" onClick={() => setIsOpen(false)} className="text-white text-2xl font-medium hover:text-red-500">About</Link>
            {/* <Link href="/about-us" onClick={() => setIsOpen(false)} className="text-white text-2xl font-medium hover:text-red-500">Company</Link> */}
            
            {/* Mobile Accordion for Brands */}
            <div className="flex flex-col">
              <button 
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                className="text-white text-2xl font-medium hover:text-red-500 flex items-center justify-between w-full"
              >
                Brands <ChevronDown className={`transition-transform duration-300 ${isBrandsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isBrandsOpen ? 'max-h-[500px] mt-4 ml-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                {brandLinks.map((item) => (
                  <Link 
                    key={item.slug} 
                    href={`/brands/${item.slug}`}
                    onClick={() => { setIsOpen(false); setIsBrandsOpen(false); }}
                    className="block py-3 text-lg text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="#" onClick={() => setIsOpen(false)} className="text-white text-2xl font-medium hover:text-red-500">News & Events</Link>
          </div>

          <Link href="#" onClick={() => setIsOpen(false)} className="mt-12 text-white flex items-center gap-3 text-xl font-bold border-b border-white/20 pb-2 w-fit">
            Contact Us <ArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;