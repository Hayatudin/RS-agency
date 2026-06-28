'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Services', href: '/services' },
    { name: 'Our Teams', href: '/team' },
    { name: 'Steps of Processing', href: '/processing' },
    { name: 'Legal Documents', href: '/legal' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHomePage = pathname === '/';
  const useWhiteLinks = isHomePage && !isScrolled;

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 rounded-full py-2 px-6 border backdrop-blur-xl shadow-lg relative ${
          isScrolled
            ? 'bg-white/40 border-white/50 shadow-black/5'
            : 'bg-white/15 border-white/20 shadow-black/10'
        }`}
      >
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a href="/" className="flex items-center group shrink-0">
            <div className="relative w-32 h-10 md:w-36 md:h-12 transition-all duration-300 ml-2 ">
              <Image
                src="/RS-logo.png"
                alt="RS Foreign Employment Agency"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
                priority
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  useWhiteLinks
                    ? 'text-white hover:text-brand-cyan hover:bg-white/10'
                    : 'text-gray-700 hover:text-brand-blue hover:bg-brand-blue/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors ${
                useWhiteLinks 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-600 hover:text-brand-blue hover:bg-brand-blue/5'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border border-gray-150 rounded-3xl shadow-xl flex flex-col gap-2 mt-2 pointer-events-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-2xl text-sm font-semibold text-gray-700 hover:text-brand-blue hover:bg-brand-blue/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-center shadow-lg shadow-brand-blue/25 text-sm"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
