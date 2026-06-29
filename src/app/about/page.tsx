'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Award, ShieldCheck, HeartHandshake, Sparkles, TrendingUp, CheckCircle2, Eye, Target } from 'lucide-react';

export default function AboutPage() {
  const [aboutTab, setAboutTab] = useState<'vision' | 'mission'>('vision');

  const coreValues = [
    {
      title: 'Integrity',
      icon: ShieldCheck,
      description: 'We operate with honesty, transparency, and high ethical standards in all our dealings.'
    },
    {
      title: 'Respect',
      icon: HeartHandshake,
      description: 'We value diversity, promote inclusivity, and treat all individuals with dignity and respect.'
    },
    {
      title: 'Excellence',
      icon: Sparkles,
      description: 'We strive for continuous improvement, innovation, and high-quality services.'
    },
    {
      title: 'Empowerment',
      icon: TrendingUp,
      description: 'We enable individuals to realize their potential and contribute to workforce development.'
    },
    {
      title: 'Collaboration',
      icon: Users,
      description: 'We work together with partners and clients to achieve shared goals and mutual success.'
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-grid-pattern">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200/60">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/15 text-brand-blue text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-brand-cyan" />
              <span>RS Agency Profile</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight leading-none">
              About Our <span className="text-gradient">Agency</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-semibold leading-relaxed">
              We connect skilled individuals with international employment opportunities, built on ethical practices and client satisfaction.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-600">
            <span className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
              Ministry Licensed
            </span>
            <span className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
              International Networks
            </span>
          </div>
        </div>

        {/* Narrative & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Swapper Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Option 1: Vision */}
            <div 
              onClick={() => setAboutTab('vision')}
              className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${
                aboutTab === 'vision' 
                  ? 'bg-white border-brand-blue/20 shadow-md shadow-brand-blue/5' 
                  : 'bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
                  aboutTab === 'vision' 
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15' 
                    : 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'
                }`}>
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-brand-dark transition-colors group-hover:text-brand-blue">Our Vision</h3>
                  <p className="text-[10px] font-bold text-gray-400 mt-0.5">To Lead Global Employment Solutions</p>
                </div>
              </div>
              
              {/* Expandable description block */}
              <div className={`grid transition-all duration-500 ease-in-out ${
                aboutTab === 'vision' ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
              }`}>
                <div className="overflow-hidden">
                  <p className="text-[11px] text-gray-500 font-semibold leading-relaxed pl-16">
                    To become a leading force in global employment solutions, empowering individuals and contributing to workforce development through integrity, innovation, and excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Option 2: Mission */}
            <div 
              onClick={() => setAboutTab('mission')}
              className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${
                aboutTab === 'mission' 
                  ? 'bg-white border-brand-blue/20 shadow-md shadow-brand-blue/5' 
                  : 'bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
                  aboutTab === 'mission' 
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15' 
                    : 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'
                }`}>
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-brand-dark transition-colors group-hover:text-brand-blue">Our Mission</h3>
                  <p className="text-[10px] font-bold text-gray-400 mt-0.5">Empowerment & Reliable Vetting</p>
                </div>
              </div>
              
              {/* Expandable description block */}
              <div className={`grid transition-all duration-500 ease-in-out ${
                aboutTab === 'mission' ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
              }`}>
                <div className="overflow-hidden">
                  <p className="text-[11px] text-gray-500 font-semibold leading-relaxed pl-16">
                    To deliver reliable, ethical recruitment and transparent placement solutions by bridging the gap between local talent and global demand through rigorous vocational training.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Mockup screen with fluid animations */}
          <div className="lg:col-span-7 relative">
            {/* Outer screen frame (mockup card style) */}
            <div className="relative rounded-[32px] overflow-hidden border border-gray-200/60 shadow-xl bg-white p-2.5 md:p-3 aspect-[4/3] w-full">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-brand-light">
                {/* Vision Image */}
                <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  aboutTab === 'vision' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 -rotate-1 pointer-events-none'
                }`}>
                  <Image
                    src="/Seats.jpeg"
                    alt="RS Agency Global Strategy"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Mission Image */}
                <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  aboutTab === 'mission' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-1 pointer-events-none'
                }`}>
                  <Image
                    src="/Training.png"
                    alt="RS Agency Vocational Training Center"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Floating Certification Card Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[210px] flex items-center gap-3 animate-float z-20">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-blue text-white shrink-0 shadow-md shadow-brand-blue/15">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Certified By</p>
                <p className="text-[11px] font-black text-brand-dark leading-tight">Ministry of Labor & Skills</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Core Values */}
        <div className="space-y-12 pt-10">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="badge uppercase tracking-wider text-brand-blue bg-brand-blue/5 border border-brand-blue/15 px-4 py-1.5 rounded-full text-xs font-bold inline-block">
              Our Foundation
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark">Our Core Values</h2>
            <p className="text-sm text-gray-500 font-semibold leading-relaxed">
              We anchor our operational policies and customer relationships on five fundamental pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 py-6 [perspective:1000px] items-center">
            {coreValues.map((value, idx) => {
              const IconComp = value.icon;
              
              // Consistent brand-blue gradient color used for all icons (as used in card 2)
              const gradientColor = 'from-blue-400 to-indigo-600 shadow-blue-500/10';

              // Height decreases as it approaches the center: Card 1/5 scale 1.06, Card 2/4 scale 1.00, Card 3 scale 0.94
              const transformStyles = [
                'lg:[transform:perspective(1000px)_rotateY(15deg)_rotateX(4deg)_scale(1.06)] hover:lg:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_scale(1.08)]',
                'lg:[transform:perspective(1000px)_rotateY(8deg)_rotateX(2deg)_scale(1.00)] hover:lg:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_scale(1.05)]',
                'lg:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_scale(0.94)] hover:lg:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_scale(1.02)]',
                'lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(2deg)_scale(1.00)] hover:lg:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_scale(1.05)]',
                'lg:[transform:perspective(1000px)_rotateY(-15deg)_rotateX(4deg)_scale(1.06)] hover:lg:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_scale(1.08)]'
              ];
              const activeTransform = transformStyles[idx];

              return (
                <div
                  key={value.title}
                  className={`bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 text-center flex flex-col items-center justify-between min-h-[320px] relative overflow-hidden group ${activeTransform}`}
                >
                  <div className="space-y-4">
                    {/* Rounded Icon Box with Gradient Background */}
                    <div className={`mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientColor} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-8 h-8" />
                    </div>

                    {/* Big Numbers (e.g. 01, 02) */}
                    <span className="block text-4xl sm:text-5xl font-black text-brand-dark tracking-tight leading-none mb-1">
                      0{idx + 1}
                    </span>

                    {/* Value subtitle */}
                    <p className="text-[10px] font-extrabold text-brand-blue uppercase tracking-widest mb-3">
                      {value.title}
                    </p>

                    {/* Value Description */}
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
