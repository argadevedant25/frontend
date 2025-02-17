"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          boco
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/work" className="hover:text-gray-600 transition-colors">
            Work
          </Link>
          <Link href="/services" className="hover:text-gray-600 transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Lets Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <div className="flex flex-col items-center space-y-8 text-xl">
            <Link href="/work" className="hover:text-gray-600">Work</Link>
            <Link href="/services" className="hover:text-gray-600">Services</Link>
            <Link href="/about" className="hover:text-gray-600">About</Link>
            <button className="bg-black text-white px-6 py-2 rounded-full">
              Lets Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}