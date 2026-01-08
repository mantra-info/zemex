"use client"
import React from 'react';
import { MapPin, Phone, Smartphone, Mail, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Navigation */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Image src={'/logo.webp'} width={60} height={40} priority alt="zemex logo"/>
            </div>
            
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#company" className="text-gray-300 hover:text-white transition-colors">
                Company
              </a>
              <a href="#brands" className="text-gray-300 hover:text-white transition-colors">
                Brands
              </a>
              <a href="#news" className="text-gray-300 hover:text-white transition-colors">
                News&Events
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-gray-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300 leading-relaxed">
                Zemex India Door No 39/1474 A1<br />
                Joyes Garden, North Janatha Road,<br />
                Palarivattom, Cochin-682025
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="text-gray-400 flex-shrink-0" />
              <a href="tel:+917994435258" className="text-gray-300 hover:text-white transition-colors">
                +91 79944 35258
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Smartphone size={20} className="text-gray-400 flex-shrink-0" />
              <a href="tel:+911800425664" className="text-gray-300 hover:text-white transition-colors">
                +91 1800 425 5664
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="text-gray-400 flex-shrink-0" />
              <a href="tel:0484-2340244" className="text-gray-300 hover:text-white transition-colors">
                0484 - 2340244
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="text-gray-400 flex-shrink-0" />
              <a href="mailto:care@i20mart.com" className="text-gray-300 hover:text-white transition-colors">
                care@i20mart.com
              </a>
            </div>
          </div>

          {/* Contact CTA and Social */}
          <div className="space-y-8">
            <button className="group flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-all duration-300 w-full md:w-auto justify-center">
              Contact Us
              <ArrowRight 
                size={18} 
                className="group-hover:translate-x-1 transition-transform" 
              />
            </button>

            <div>
              <p className="text-gray-400 mb-4">Follow us on</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-[#152961] border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              copyright@2025. <span className="text-white">Zemex India</span>, All Rights Reserved
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}