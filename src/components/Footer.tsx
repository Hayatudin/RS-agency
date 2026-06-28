import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-400 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <a href="/" className="flex items-center group shrink-0">
              <div className="relative w-40 h-14 transition-all duration-300">
                <Image
                  src="/RS-logo.png"
                  alt="RS Foreign Employment Agency"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                  className="brightness-0 invert"
                />
              </div>
            </a>
            <p className="text-sm leading-relaxed text-gray-400">
              A trusted recruitment agency dedicated to connecting skilled individuals with international employment opportunities, built on ethical practices and client satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Quick Links</h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Why Choose Us', href: '/why-choose-us' },
                { name: 'Our Teams', href: '/team' },
                { name: 'Steps of Processing', href: '/processing' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sister Company */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Sister Company</h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: 'DAERA Foreign Employment Agent' },
              ].map((sister) => (
                <li key={sister.name} className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                  <span>{sister.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span>Bole Dembel, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+251924054412" className="hover:text-white transition-colors">+251 924 054 412</a>
                  <a href="tel:+251960178117" className="hover:text-white transition-colors">+251 960 178 117</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <a href="mailto:ziyuabdu@gmail.com" className="hover:text-white transition-colors">
                  ziyuabdu@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} RS Foreign Employment Agency PLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
