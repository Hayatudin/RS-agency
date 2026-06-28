'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Globe,
  Award,
  Briefcase,
  Layers,
  Zap,
  Scale,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  Share2,
  Megaphone,
  Users,
  ClipboardCheck,
  Database,
  Heart,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  Building2,
  ArrowUpRight,
  Factory,
  Truck,
  Utensils,
  ShoppingBag,
  Laptop,
  Eye,
  Target
} from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const totalMilliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMilliseconds / end), 20);
    const step = Math.ceil(end / (totalMilliseconds / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  // Services hover state
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // About Us Tab state
  const [aboutTab, setAboutTab] = useState<'vision' | 'mission'>('vision');

  // Contact Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    // Simulate API call
    setTimeout(() => {
      setFormLoading(false);
      setFormSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

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
      icon: Share2,
      description: 'We work together with our partners, clients, and sister companies to achieve shared goals.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Government Certified',
      icon: Award,
      description: 'Fully licensed and compliant with all local and international labor regulations.'
    },
    {
      title: 'Proven Experience',
      icon: Briefcase,
      description: 'Years of successful placements across diverse sectors globally.'
    },
    {
      title: 'Large Database',
      icon: Layers,
      description: 'A vast network of pre-screened, qualified candidates ready for deployment.'
    },
    {
      title: 'Fast Processing',
      icon: Zap,
      description: 'Efficient workflows that minimize time-to-hire and deployment delays.'
    },
    {
      title: 'Ethical Operations',
      icon: Scale,
      description: 'Transparency first—no hidden fees, ethical recruitment practices.'
    }
  ];

  const services = [
    {
      num: '01',
      title: 'Strategic Advertising & Talent Search',
      icon: Megaphone,
      description: 'We design targeted recruitment campaigns and leverage modern channels to source the best-fitting candidates.'
    },
    {
      num: '02',
      title: 'Personalized Client Management',
      icon: Users,
      description: 'Our dedicated account managers work closely with employers to understand and serve their specific workforce requirements.'
    },
    {
      num: '03',
      title: 'Screening & Assessment',
      icon: ClipboardCheck,
      description: 'Comprehensive testing, background verification, medical screening, and practical skills evaluation.'
    },
    {
      num: '04',
      title: 'Extensive Candidate Database',
      icon: Database,
      description: 'Instant access to a massive pool of pre-screened, qualified profiles across multiple categories.'
    },
    {
      num: '05',
      title: 'Corporate Social Responsibility',
      icon: Heart,
      description: 'Supporting local community development, skill upgrading, and promoting fair labor practices.'
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen">
      {/* SECTION 1: HERO — Full-bleed image with dark overlay */}
      <section id="home" className="relative min-h-[100vh] flex items-end overflow-hidden -mt-24">
        {/* Background Image */}
        <Image
          src="/Hero.jpeg"
          alt="RS Agency Global Operations"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="absolute inset-0 z-0"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold animate-fade-in">
                <Sparkles className="w-4 h-4 text-brand-blue" />
                <span>Ministry Certified Recruitment Agency</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white drop-shadow-lg">
                GLOBAL RECRUITMENT <br />
                <span className="text-brand-blue">BUILT ON TRUST</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/75 max-w-md leading-relaxed font-medium">
                Connecting skilled professionals with global opportunities through ethical, compliant job placements.
              </p>

              {/* CTA Buttons — Liquid Glass */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300 hover:-translate-y-0.5 shadow-lg group"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-blue text-white font-bold text-sm hover:bg-brand-blue/90 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Contact Us
                </a>
              </div>

              {/* Bottom Stats Row — Animated Counters */}
              <div className="flex flex-wrap gap-6 pt-6 mt-2 border-t border-white/10">
                <div>
                  <h4 className="text-3xl font-black text-white">100%</h4>
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5">ministry compliance</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white">Musaned</h4>
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5">system integrated</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white">24/7</h4>
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5">client support</p>
                </div>
              </div>
            </div>

            {/* Right Side — Floating Liquid Glass Card */}
            <div className="lg:col-span-5 hidden lg:flex justify-end">
              <div className="relative max-w-xs">
                {/* Testimonial / Location Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl space-y-4">
                  <div className="flex items-center gap-2 text-brand-blue text-sm font-semibold">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                    <span>Bole Dembel, Addis Ababa</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed font-medium italic">
                    &ldquo;A professional agency that handled my placement and travel support with complete transparency.&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <div className="w-9 h-9 rounded-full bg-brand-blue/30 flex items-center justify-center text-white text-xs font-bold">
                      RS
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">RS Foreign Employment</p>
                      <p className="text-white/50 text-[10px] font-semibold">Agency PLC</p>
                    </div>
                  </div>
                </div>

                {/* Floating accent */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-brand-blue text-white text-[10px] font-extrabold shadow-lg animate-float">
                  ★ 5.0 Rated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DAERA PARTNER SPOTLIGHT */}
      <section id="sister-companies" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/15 text-brand-blue text-sm font-semibold">
                <Building2 className="w-4 h-4 text-brand-cyan" />
                <span>Strategic Partnership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
                Operating Alongside <br />
                <span className="text-gradient">DAERA Foreign Employment</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-medium max-w-xl">
                We proudly operate alongside our sister company — DAERA Foreign Employment Agent — to provide comprehensive support across recruitment, training, and travel services. Together, we form a unified force delivering ethical, compliant, and world-class employment solutions.
              </p>

              {/* Partnership Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-light border border-gray-100 hover:border-brand-blue/20 transition-all">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue/10 text-brand-blue shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark">Shared Compliance</h4>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">Unified standards across all recruitment operations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-light border border-gray-100 hover:border-brand-blue/20 transition-all">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue/10 text-brand-blue shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark">Global Reach</h4>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">Extended employer network across the Middle East, Europe & beyond.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-light border border-gray-100 hover:border-brand-blue/20 transition-all">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue/10 text-brand-blue shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark">Talent Pipeline</h4>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">Joint candidate database for faster, smarter placements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-light border border-gray-100 hover:border-brand-blue/20 transition-all">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue/10 text-brand-blue shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark">Certified Excellence</h4>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">Both agencies fully licensed by the Ministry of Labor & Skills.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side — Decorative Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Main Card */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-blue to-brand-dark text-white shadow-2xl shadow-brand-blue/20 max-w-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
                      <Building2 className="w-7 h-7 text-brand-cyan" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg tracking-tight">DAERA</h3>
                      <p className="text-xs text-white/70 font-semibold">Foreign Employment Agent</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-medium mb-6">
                    Expert consultancy and agency supporting recruitment campaigns, ethical hiring compliance, and global employment solutions for employers worldwide.
                  </p>
                  <div className="flex items-center gap-6 pt-4 border-t border-white/15">
                    <div>
                      <span className="text-2xl font-black text-brand-cyan">10K+</span>
                      <p className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Placements</p>
                    </div>
                    <div>
                      <span className="text-2xl font-black text-brand-cyan">5+</span>
                      <p className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Countries</p>
                    </div>
                    <div>
                      <span className="text-2xl font-black text-brand-cyan">100%</span>
                      <p className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Compliant</p>
                    </div>
                  </div>
                </div>

                {/* Floating accent pill */}
                <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-brand-cyan/90 text-brand-dark text-xs font-extrabold shadow-lg animate-float">
                  Sister Agency ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT US */}
      <section id="about" className="py-24 bg-gradient-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header block with title & action */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200/60 mb-12">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/15 text-brand-blue text-xs font-semibold">
                <Users className="w-3.5 h-3.5 text-brand-cyan" />
                <span>About Our Agency</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-none">
                Empowering Talents, <span className="text-gradient">Connecting Opportunities</span> Globally
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                RS Foreign Employment Agent is a premier recruitment partner connecting skilled professionals with global employers. Alongside our sister agencies and certified training centers, we manage the complete lifecycle of international placement with absolute transparency.
              </p>
            </div>
            <div className="shrink-0">
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white text-xs font-extrabold shadow-lg shadow-brand-blue/15 transition-all"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Feature Swapper */}
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
                      src="/office.jpeg"
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
                      src="/vocational_training_center.png"
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
        </div>
      </section>

      {/* SECTION 4: CORE VALUES */}
      <section id="values" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="badge">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Our Core Values</h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto font-medium">
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
      </section>

      {/* SECTION 5: OPERATIONAL STRENGTH (WHY CHOOSE RS) */}
      <section id="why-choose-us" className="py-24 bg-brand-light relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header block matching Spais layout */}
          <div className="text-center space-y-4 mb-16">
            <span className="badge uppercase tracking-wider text-brand-blue bg-brand-blue/5 border border-brand-blue/15 px-4 py-1.5 rounded-full text-xs font-bold inline-block">
              Operational Strength
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Why Choose RS Agency?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              We stand out by maintaining highly structured processing models, ensuring seamless coordination, and protecting candidate interests.
            </p>
          </div>

          {/* 5-Card Layout matching Spais layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
            {/* CARD 1: Government Certified (Top Left wide card - col-span-6) */}
            <div className="lg:col-span-6 rounded-3xl border border-gray-100 bg-white p-8 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
              {/* Graphic */}
              <div className="relative h-44 flex items-center justify-center bg-brand-light/50 rounded-2xl border border-gray-50/50 overflow-hidden mb-6 group-hover:bg-brand-blue/[0.02] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5"></div>
                {/* Certificate Mockup Frame */}
                <div className="relative w-48 h-28 bg-white rounded-xl shadow-lg border border-gray-100 p-3.5 flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                  <div className="space-y-2">
                    <div className="h-2 w-16 bg-brand-blue/20 rounded"></div>
                    <div className="h-1.5 w-32 bg-gray-100 rounded"></div>
                    <div className="h-1.5 w-24 bg-gray-100 rounded"></div>
                  </div>
                  <div className="flex items-center justify-between mt-4 border-t border-gray-50 pt-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                        <Award className="w-3 h-3" />
                      </div>
                      <span className="text-[6.5px] font-black text-brand-blue tracking-widest uppercase">LICENSED AGENCY</span>
                    </div>
                    {/* Pulsing seal */}
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full bg-brand-cyan/35 animate-ping"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-brand-cyan flex items-center justify-center text-brand-dark font-black text-[6px]">✓</div>
                    </div>
                  </div>
                </div>
                {/* Ministry badge floating */}
                <div className="absolute bottom-4 right-4 px-2 py-1 rounded-lg bg-brand-dark text-white text-[7px] font-bold shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  100% COMPLIANT
                </div>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-extrabold text-brand-dark group-hover:text-brand-blue transition-colors duration-300 mb-2">
                  {whyChooseUs[0].title}
                </h3>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  {whyChooseUs[0].description}
                </p>
              </div>
            </div>

            {/* CARD 2: Proven Experience (Top Right wide card - col-span-6) */}
            <div className="lg:col-span-6 rounded-3xl border border-gray-100 bg-white p-8 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
              {/* Graphic */}
              <div className="relative h-44 flex items-center justify-center bg-brand-light/50 rounded-2xl border border-gray-50/50 overflow-hidden mb-6 group-hover:bg-brand-blue/[0.02] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5"></div>
                {/* Center circuit hub */}
                <div className="relative w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/15 z-10 animate-pulse">
                  <Globe className="w-5 h-5" />
                </div>
                {/* Concentric path connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 350 176">
                  <path d="M 175 88 L 100 50" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" className="animate-dash-pulse opacity-60" />
                  <path d="M 175 88 L 275 50" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" className="animate-dash-pulse opacity-60" />
                  <path d="M 175 88 L 100 120" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" className="animate-dash-pulse opacity-60" />
                  <path d="M 175 88 L 275 120" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" className="animate-dash-pulse opacity-60" />
                </svg>
                {/* Floating nodes */}
                <div className="absolute top-8 left-16 bg-white shadow p-1.5 rounded-lg border border-gray-100/50 flex items-center gap-1 transform group-hover:scale-105 transition-all">
                  <span className="text-[7px] font-black text-brand-dark">ROMANIA</span>
                </div>
                <div className="absolute top-8 right-16 bg-white shadow p-1.5 rounded-lg border border-gray-100/50 flex items-center gap-1 transform group-hover:scale-105 transition-all">
                  <span className="text-[7px] font-black text-brand-dark">MIDDLE EAST</span>
                </div>
                <div className="absolute bottom-8 left-16 bg-white shadow p-1.5 rounded-lg border border-gray-100/50 flex items-center gap-1 transform group-hover:scale-105 transition-all">
                  <span className="text-[7px] font-black text-brand-dark">VOCATIONAL</span>
                </div>
                <div className="absolute bottom-8 right-16 bg-white shadow p-1.5 rounded-lg border border-gray-100/50 flex items-center gap-1 transform group-hover:scale-105 transition-all">
                  <span className="text-[7px] font-black text-brand-dark">SISTER NETWORKS</span>
                </div>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-extrabold text-brand-dark group-hover:text-brand-blue transition-colors duration-300 mb-2">
                  {whyChooseUs[1].title}
                </h3>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  {whyChooseUs[1].description}
                </p>
              </div>
            </div>

            {/* CARD 3: Large Database (Bottom Left card - col-span-4) */}
            <div className="lg:col-span-4 rounded-3xl border border-gray-100 bg-white p-6 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
              {/* Graphic */}
              <div className="relative h-36 flex items-center justify-center bg-brand-light/50 rounded-2xl border border-gray-50/50 overflow-hidden mb-4 group-hover:bg-brand-blue/[0.02] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5"></div>
                {/* Keyboard Shortcut frame */}
                <div className="bg-white rounded-xl shadow-md p-3.5 border border-gray-100 flex flex-col items-center gap-2.5 w-36 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="flex gap-1.5">
                    <kbd className="px-2 py-1 rounded bg-gray-50 border border-gray-200 text-[8px] font-black text-brand-dark shadow-sm">Ctrl</kbd>
                    <span className="text-[8px] font-bold text-gray-400 mt-0.5">+</span>
                    <kbd className="px-2 py-1 rounded bg-gray-50 border border-gray-200 text-[8px] font-black text-brand-dark shadow-sm">K</kbd>
                  </div>
                  <div className="h-5 w-28 rounded bg-brand-light border border-gray-100 flex items-center px-1.5">
                    <span className="text-[7px] text-gray-400 font-bold">Search 15k+ pool...</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-sm font-extrabold text-brand-dark group-hover:text-brand-blue transition-colors duration-300 mb-1.5">
                  {whyChooseUs[2].title}
                </h3>
                <p className="text-[11px] text-gray-500 font-semibold leading-relaxed">
                  {whyChooseUs[2].description}
                </p>
              </div>
            </div>

            {/* CARD 4: Fast Processing (Bottom Center card - col-span-4) */}
            <div className="lg:col-span-4 rounded-3xl border border-gray-100 bg-white p-6 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
              {/* Graphic */}
              <div className="relative h-36 flex items-center justify-center bg-brand-light/50 rounded-2xl border border-gray-50/50 overflow-hidden mb-4 group-hover:bg-brand-blue/[0.02] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5"></div>
                {/* Workspace List Mockup */}
                <div className="bg-white rounded-xl shadow-md p-3 border border-gray-100 flex flex-col gap-2 w-36 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center gap-1 border-b border-gray-50 pb-1">
                    <div className="w-1 h-1 rounded-full bg-brand-blue"></div>
                    <span className="text-[6.5px] font-black text-brand-dark uppercase tracking-wider">Musaned Status</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[6.5px] text-gray-500 font-bold bg-brand-blue/5 px-1.5 py-0.5 rounded">
                      <span>01 Vetting CV</span>
                      <span className="text-[5.5px] text-brand-blue font-black">Done</span>
                    </div>
                    <div className="flex items-center justify-between text-[6.5px] text-gray-500 font-bold bg-brand-blue/5 px-1.5 py-0.5 rounded animate-pulse">
                      <span>02 Medical Check</span>
                      <span className="text-[5.5px] text-brand-cyan font-black">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-[6.5px] text-gray-400 font-semibold px-1.5 py-0.5">
                      <span>03 Embassy Setup</span>
                      <span>Pending</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-sm font-extrabold text-brand-dark group-hover:text-brand-blue transition-colors duration-300 mb-1.5">
                  {whyChooseUs[3].title}
                </h3>
                <p className="text-[11px] text-gray-500 font-semibold leading-relaxed">
                  {whyChooseUs[3].description}
                </p>
              </div>
            </div>

            {/* CARD 5: Ethical Operations (Bottom Right card - col-span-4) */}
            <div className="lg:col-span-4 rounded-3xl border border-gray-100 bg-white p-6 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
              {/* Graphic */}
              <div className="relative h-36 flex items-center justify-center bg-brand-light/50 rounded-2xl border border-gray-50/50 overflow-hidden mb-4 group-hover:bg-brand-blue/[0.02] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5"></div>
                {/* Collaboration nodes */}
                <div className="relative w-32 h-20 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/15 text-[10px] font-black z-10">RS</div>
                  <div className="absolute top-0 left-4 w-5 h-5 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-[6.5px] font-black text-gray-600">CO</div>
                  <div className="absolute bottom-0 left-6 w-5 h-5 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-[6.5px] font-black text-gray-600">DE</div>
                  <div className="absolute top-1 right-5 w-5 h-5 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-[6.5px] font-black text-gray-600">TR</div>
                  <div className="absolute bottom-1 right-8 w-5 h-5 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-[6.5px] font-black text-gray-600">PA</div>
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 128 80">
                    <line x1="64" y1="40" x2="26" y2="15" stroke="#bfdbfe" strokeWidth="1" />
                    <line x1="64" y1="40" x2="36" y2="70" stroke="#bfdbfe" strokeWidth="1" />
                    <line x1="64" y1="40" x2="102" y2="18" stroke="#bfdbfe" strokeWidth="1" />
                    <line x1="64" y1="40" x2="84" y2="72" stroke="#bfdbfe" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-sm font-extrabold text-brand-dark group-hover:text-brand-blue transition-colors duration-300 mb-1.5">
                  {whyChooseUs[4].title}
                </h3>
                <p className="text-[11px] text-gray-500 font-semibold leading-relaxed">
                  {whyChooseUs[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5.5: ROMANIAN LABOR MARKET DEMAND */}
      <section id="romania-demand" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center space-y-4 mb-20">
            <span className="badge uppercase tracking-wider text-brand-blue bg-brand-blue/5 border border-brand-blue/15 px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Romanian Labor Demand
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Romanian Market Opportunities & Focus Areas
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Romania is experiencing strong demand for both skilled and unskilled talent. We bridge these gaps by aligning Ethiopian professionals with key high-growth industries.
            </p>
          </div>

          {/* Infographic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                num: 'OPTION 01',
                title: 'CONSTRUCTION SECTOR',
                descriptions: [
                  'General Laborers & Masons',
                  'Carpenters & Steel Fixers',
                  'Electricians & Plumbers',
                  'Heavy Equipment Operators'
                ],
                icon: Building2,
                color: 'rose', // Style 0: bottom-left accent
                style: 0
              },
              {
                num: 'OPTION 02',
                title: 'MANUFACTURING',
                descriptions: [
                  'Production Operators',
                  'Machine Operators & Assemblers',
                  'Factory & Warehouse Workers',
                  'Packaging Staff'
                ],
                icon: Factory,
                color: 'orange', // Style 1: top-left accent
                style: 1
              },
              {
                num: 'OPTION 03',
                title: 'LOGISTICS & TRANSPORT',
                descriptions: [
                  'Truck & Delivery Drivers',
                  'Forklift Operators',
                  'Goods Handlers & Couriers',
                  'Warehouse Staff'
                ],
                icon: Truck,
                color: 'blue', // Style 2: top-right accent
                style: 2
              },
              {
                num: 'OPTION 04',
                title: 'HOSPITALITY (HO.RE.CA)',
                descriptions: [
                  'Waiters & Housekeepers',
                  'Kitchen Assistants',
                  'Cooks, Chefs & Cleaners',
                  'Hotel Staff'
                ],
                icon: Utensils,
                color: 'purple', // Style 3: bottom-right accent
                style: 3
              },
              {
                num: 'OPTION 05',
                title: 'RETAIL SECTOR',
                descriptions: [
                  'Shop Assistants',
                  'Cashiers & Sales Workers',
                  'Store Clerks'
                ],
                icon: ShoppingBag,
                color: 'rose', // Style 0: bottom-left accent
                style: 0
              },
              {
                num: 'OPTION 06',
                title: 'HEALTHCARE & CARE',
                descriptions: [
                  'Professional Nurses',
                  'Elderly Care Assistants',
                  'Medical Technicians',
                  'Home Caregivers'
                ],
                icon: Heart,
                color: 'orange', // Style 1: top-left accent
                style: 1
              },
              {
                num: 'OPTION 07',
                title: 'IT & TECHNICAL SUPPORT',
                descriptions: [
                  'Software Developers',
                  'Network Engineers',
                  'IT Support Specialists',
                  'Technical Associates'
                ],
                icon: Laptop,
                color: 'blue', // Style 2: top-right accent
                style: 2
              },
              {
                num: 'OPTION 08',
                title: 'ETHIOPIAN RECRUITMENT FOCUS',
                descriptions: [
                  'General Labor & Construction',
                  'Factory & Warehouse Staff',
                  'Hotel, Culinary & Restaurant',
                  'Welders, Electricians & Plumbers'
                ],
                icon: Sparkles,
                color: 'emerald', // Style 3: bottom-right accent (Green highlight)
                style: 3,
                isFocusCard: true
              }
            ].map((card) => {
              // Color configuration classes
              let borderCol = '';
              let textCol = '';
              let bgCol = '';
              let shadowCol = '';

              if (card.color === 'rose') {
                borderCol = 'border-rose-500';
                textCol = 'text-rose-500';
                bgCol = 'bg-rose-500';
                shadowCol = 'shadow-rose-500/10 hover:shadow-rose-500/25';
              } else if (card.color === 'orange') {
                borderCol = 'border-orange-500';
                textCol = 'text-orange-500';
                bgCol = 'bg-orange-500';
                shadowCol = 'shadow-orange-500/10 hover:shadow-orange-500/25';
              } else if (card.color === 'blue') {
                borderCol = 'border-brand-blue';
                textCol = 'text-brand-blue';
                bgCol = 'bg-brand-blue';
                shadowCol = 'shadow-brand-blue/10 hover:shadow-brand-blue/25';
              } else if (card.color === 'purple') {
                borderCol = 'border-purple-500';
                textCol = 'text-purple-500';
                bgCol = 'bg-purple-500';
                shadowCol = 'shadow-purple-500/10 hover:shadow-purple-500/25';
              } else if (card.color === 'emerald') {
                borderCol = 'border-emerald-500';
                textCol = 'text-emerald-500';
                bgCol = 'bg-emerald-500';
                shadowCol = 'shadow-emerald-500/10 hover:shadow-emerald-500/25';
              }

              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`relative rounded-[2.5rem] bg-white p-8 border border-gray-150 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center overflow-visible group hover:-translate-y-1.5 ${shadowCol} ${card.isFocusCard ? 'bg-gradient-to-b from-white to-emerald-50/20' : ''
                    }`}
                >
                  {/* Option corner outline styling mapping to the Infographic UI mockup */}
                  {card.style === 0 && (
                    <>
                      <div className={`absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 rounded-bl-[2.5rem] -ml-[1px] -mb-[1px] ${borderCol}`} />
                      <div className={`absolute bottom-16 left-0 w-2 h-2 rounded-full -translate-x-[3px] translate-y-1/2 ${bgCol}`} />
                      <div className={`absolute bottom-0 left-16 w-2 h-2 rounded-full translate-x-1/2 translate-y-[3px] ${bgCol}`} />
                    </>
                  )}
                  {card.style === 1 && (
                    <>
                      <div className={`absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 rounded-tl-[2.5rem] -ml-[1px] -mt-[1px] ${borderCol}`} />
                      <div className={`absolute top-16 left-0 w-2 h-2 rounded-full -translate-x-[3px] -translate-y-1/2 ${bgCol}`} />
                      <div className={`absolute top-0 left-16 w-2 h-2 rounded-full translate-x-1/2 -translate-y-[3px] ${bgCol}`} />
                    </>
                  )}
                  {card.style === 2 && (
                    <>
                      <div className={`absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 rounded-tr-[2.5rem] -mr-[1px] -mt-[1px] ${borderCol}`} />
                      <div className={`absolute top-16 right-0 w-2 h-2 rounded-full translate-x-[3px] -translate-y-1/2 ${bgCol}`} />
                      <div className={`absolute top-0 right-16 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-[3px] ${bgCol}`} />
                    </>
                  )}
                  {card.style === 3 && (
                    <>
                      <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 rounded-br-[2.5rem] -mr-[1px] -mb-[1px] ${borderCol}`} />
                      <div className={`absolute bottom-16 right-0 w-2 h-2 rounded-full translate-x-[3px] translate-y-1/2 ${bgCol}`} />
                      <div className={`absolute bottom-0 right-16 w-2 h-2 rounded-full -translate-x-1/2 translate-y-[3px] ${bgCol}`} />
                    </>
                  )}

                  {/* Icon */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gray-50 text-gray-700 group-hover:bg-brand-blue/5 group-hover:text-brand-blue transition-colors`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Option badge */}
                  <span className={`text-[10px] font-black tracking-widest ${textCol} uppercase mb-2 block`}>
                    {card.num}
                  </span>

                  {/* Title */}
                  <h3 className="font-extrabold text-sm text-brand-dark tracking-wide uppercase mb-4">
                    {card.title}
                  </h3>

                  {/* Descriptions List */}
                  <ul className="text-xs text-gray-500 font-semibold leading-relaxed space-y-1.5">
                    {card.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES (Concentric SWOT-style Diagram UI) */}
      <section id="services" className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
        <style>{`
          @keyframes dash-pulse {
            to {
              stroke-dashoffset: -40;
            }
          }
          .animate-dash-pulse {
            stroke-dasharray: 8 6;
            animation: dash-pulse 1.2s linear infinite;
          }
        `}</style>

        {/* Ambient background blur blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="badge">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Our Services</h2>
            <p className="text-base text-gray-500 max-w-2xl mx-auto font-medium">
              We manage the entire recruitment and placement lifecycle through five strategic pillars, coordinating with government ministries and foreign employers.
            </p>
          </div>

          {/* Concentric SWOT-style Diagram container */}
          <div className="relative min-h-[580px] flex flex-col items-center justify-center">
            
            {/* SVG Connecting Lines (desktop lg viewport only) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" viewBox="0 0 1200 600" fill="none">
              
              {/* Lines from left cards to circle */}
              {/* Card 1 (Top Left) to circle */}
              <path d="M 380 140 L 440 140 L 510 200" stroke="#E2E8F0" strokeWidth="2" />
              <path 
                d="M 380 140 L 440 140 L 510 200" 
                stroke="#2563eb" 
                strokeWidth="2" 
                className={`animate-dash-pulse transition-opacity duration-300 ${hoveredService === 0 ? 'opacity-100' : 'opacity-0'}`} 
              />
              <circle cx="510" cy="200" r="5.5" fill="#3b82f6" stroke="white" strokeWidth="1.5" />

              {/* Card 2 (Bottom Left) to circle */}
              <path d="M 380 380 L 440 380 L 510 320" stroke="#E2E8F0" strokeWidth="2" />
              <path 
                d="M 380 380 L 440 380 L 510 320" 
                stroke="#2563eb" 
                strokeWidth="2" 
                className={`animate-dash-pulse transition-opacity duration-300 ${hoveredService === 1 ? 'opacity-100' : 'opacity-0'}`} 
              />
              <circle cx="510" cy="320" r="5.5" fill="#3b82f6" stroke="white" strokeWidth="1.5" />

              {/* Lines from right cards to circle */}
              {/* Card 3 (Top Right) to circle */}
              <path d="M 820 140 L 760 140 L 690 200" stroke="#E2E8F0" strokeWidth="2" />
              <path 
                d="M 820 140 L 760 140 L 690 200" 
                stroke="#2563eb" 
                strokeWidth="2" 
                className={`animate-dash-pulse transition-opacity duration-300 ${hoveredService === 2 ? 'opacity-100' : 'opacity-0'}`} 
              />
              <circle cx="690" cy="200" r="5.5" fill="#3b82f6" stroke="white" strokeWidth="1.5" />

              {/* Card 4 (Bottom Right) to circle */}
              <path d="M 820 380 L 760 380 L 690 320" stroke="#E2E8F0" strokeWidth="2" />
              <path 
                d="M 820 380 L 760 380 L 690 320" 
                stroke="#2563eb" 
                strokeWidth="2" 
                className={`animate-dash-pulse transition-opacity duration-300 ${hoveredService === 3 ? 'opacity-100' : 'opacity-0'}`} 
              />
              <circle cx="690" cy="320" r="5.5" fill="#3b82f6" stroke="white" strokeWidth="1.5" />

              {/* Card 5 (Bottom Center) to circle */}
              <path d="M 600 480 L 600 375" stroke="#E2E8F0" strokeWidth="2" />
              <path 
                d="M 600 480 L 600 375" 
                stroke="#2563eb" 
                strokeWidth="2" 
                className={`animate-dash-pulse transition-opacity duration-300 ${hoveredService === 4 ? 'opacity-100' : 'opacity-0'}`} 
              />
              <circle cx="600" cy="375" r="5.5" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
            </svg>

            {/* Layout Grid wrapping 3 columns on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
              
              {/* Left Column: Services 1 & 2 */}
              <div className="lg:col-span-4 flex flex-col gap-12 lg:pr-8">
                {/* Service 1 */}
                <div 
                  className={`rounded-3xl p-6 border transition-all duration-300 relative group/c1 cursor-pointer ${
                    hoveredService === 0 ? 'bg-white border-brand-blue/30 shadow-lg' : 'bg-brand-light/40 border-gray-100 shadow-sm'
                  }`}
                  onMouseEnter={() => setHoveredService(0)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                      hoveredService === 0 ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'
                    }`}>
                      <Megaphone className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black text-brand-blue bg-brand-blue/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Service 01</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-brand-dark mb-2 group-hover/c1:text-brand-blue transition-colors">
                    {services[0].title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    {services[0].description}
                  </p>
                </div>

                {/* Service 2 */}
                <div 
                  className={`rounded-3xl p-6 border transition-all duration-300 relative group/c2 cursor-pointer ${
                    hoveredService === 1 ? 'bg-white border-brand-blue/30 shadow-lg' : 'bg-brand-light/40 border-gray-100 shadow-sm'
                  }`}
                  onMouseEnter={() => setHoveredService(1)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                      hoveredService === 1 ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'
                    }`}>
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black text-brand-blue bg-brand-blue/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Service 02</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-brand-dark mb-2 group-hover/c2:text-brand-blue transition-colors">
                    {services[1].title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    {services[1].description}
                  </p>
                </div>
              </div>

              {/* Center Column: Concentric Circle Hub */}
              <div className="lg:col-span-4 flex items-center justify-center py-6">
                <div className="relative flex items-center justify-center w-48 h-48 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-brand-blue to-indigo-900 text-white border border-brand-blue/30 shadow-xl shadow-brand-blue/10 relative z-10 select-none group">
                  {/* Outer concentric rings physically centered on the element */}
                  <div className="absolute -inset-8 rounded-full border border-brand-blue/15 pointer-events-none z-0"></div>
                  <div className="absolute -inset-16 rounded-full border border-brand-blue/8 border-dashed pointer-events-none z-0"></div>

                  {/* Glowing waves */}
                  <div className="absolute inset-0 rounded-full border border-brand-blue/20 animate-ping pointer-events-none duration-1000 z-0"></div>
                  <div className="absolute -inset-4 rounded-full border border-brand-cyan/15 animate-pulse pointer-events-none z-0"></div>
                  
                  {/* Concentric inner circle */}
                  <div className="absolute inset-4 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.04] z-10">
                    <div className="text-center p-4">
                      <h4 className="font-black text-lg sm:text-xl tracking-widest text-white">RS</h4>
                      <p className="text-[9px] text-brand-cyan font-bold uppercase tracking-widest mt-1">SERVICES</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Services 3 & 4 */}
              <div className="lg:col-span-4 flex flex-col gap-12 lg:pl-8">
                {/* Service 3 */}
                <div 
                  className={`rounded-3xl p-6 border transition-all duration-300 relative group/c3 cursor-pointer ${
                    hoveredService === 2 ? 'bg-white border-brand-blue/30 shadow-lg' : 'bg-brand-light/40 border-gray-100 shadow-sm'
                  }`}
                  onMouseEnter={() => setHoveredService(2)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                      hoveredService === 2 ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'
                    }`}>
                      <ClipboardCheck className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black text-brand-blue bg-brand-blue/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Service 03</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-brand-dark mb-2 group-hover/c3:text-brand-blue transition-colors">
                    {services[2].title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    {services[2].description}
                  </p>
                </div>

                {/* Service 4 */}
                <div 
                  className={`rounded-3xl p-6 border transition-all duration-300 relative group/c4 cursor-pointer ${
                    hoveredService === 3 ? 'bg-white border-brand-blue/30 shadow-lg' : 'bg-brand-light/40 border-gray-100 shadow-sm'
                  }`}
                  onMouseEnter={() => setHoveredService(3)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                      hoveredService === 3 ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'
                    }`}>
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black text-brand-blue bg-brand-blue/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Service 04</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-brand-dark mb-2 group-hover/c4:text-brand-blue transition-colors">
                    {services[3].title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                    {services[3].description}
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Row: Service 5 centered */}
            <div className="w-full max-w-lg mt-12 relative z-10">
              <div 
                className={`rounded-3xl p-6 border transition-all duration-300 relative group/c5 cursor-pointer text-center flex flex-col items-center justify-center ${
                  hoveredService === 4 ? 'bg-white border-brand-blue/30 shadow-lg' : 'bg-brand-light/40 border-gray-100 shadow-sm'
                }`}
                onMouseEnter={() => setHoveredService(4)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                    hoveredService === 4 ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'
                  }`}>
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-brand-blue bg-brand-blue/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Service 05</span>
                </div>
                <h3 className="font-extrabold text-sm text-brand-dark mb-2 group-hover/c5:text-brand-blue transition-colors">
                  {services[4].title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed font-semibold max-w-sm mx-auto">
                  {services[4].description}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6.2: CANDIDATE CV MARQUEE SHOWCASE */}
      <section id="candidates-roster" className="py-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column (4 columns) */}
            <div className="lg:col-span-4 space-y-6">
              <span className="badge uppercase tracking-wider text-brand-blue bg-brand-blue/5 border border-brand-blue/15 px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Live Candidate Pool
              </span>

              <h2 className="text-4xl font-black tracking-tight leading-[1.1] text-brand-dark">
                Empower Operations <br />
                with <span className="text-brand-blue">Verified Talent</span>
              </h2>

              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Browse our active roster of qualified, pre-screened professionals. Each candidate is certified, medically cleared, and prepared for rapid European deployment.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  Request CV Access
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-brand-dark font-bold text-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  Browse Full Roster
                </a>
              </div>

              {/* Visual highlights footer */}
              <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-gray-100">
                <span className="px-3.5 py-1.5 rounded-full bg-gray-100 text-[10px] font-bold text-gray-600 tracking-wide uppercase">
                  Pre-Screened
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-gray-100 text-[10px] font-bold text-gray-600 tracking-wide uppercase">
                  EU-Ready
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-gray-100 text-[10px] font-bold text-gray-600 tracking-wide uppercase">
                  Verified Bio
                </span>
              </div>
            </div>

            {/* Right CV Marquee Column (8 columns, borderless, floating layout) */}
            <div className="lg:col-span-8 relative h-[620px] overflow-hidden bg-transparent">
              {/* Fade out top overlay */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

              {/* Fade out bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

              {/* Grid of 3 parallel scroll lanes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full">

                {/* Lane 1: Scrolling Upwards (Candidates 1 - 4) */}
                <div className="relative h-full overflow-hidden">
                  <div className="flex flex-col gap-5 absolute w-full animate-marquee-vertical-up hover:[animation-play-state:paused]">
                    {[...Array(2)].flatMap((_, i) =>
                      [
                        { id: 1 },
                        { id: 2 },
                        { id: 3 },
                        { id: 4 }
                      ].map((card, idx) => (
                        <div
                          key={`lane1-${i}-${idx}-${card.id}`}
                          className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                        >
                          <img
                            src={`/cv/cv${card.id}.png?v=2`}
                            alt={`Candidate ${card.id} CV`}
                            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                          />
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Lane 2: Scrolling Downwards (Candidates 5 - 7) */}
                <div className="relative h-full overflow-hidden hidden md:block">
                  <div className="flex flex-col gap-5 absolute w-full animate-marquee-vertical-down hover:[animation-play-state:paused]">
                    {[...Array(2)].flatMap((_, i) =>
                      [
                        { id: 5 },
                        { id: 6 },
                        { id: 7 }
                      ].map((card, idx) => (
                        <div
                          key={`lane2-${i}-${idx}-${card.id}`}
                          className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                        >
                          <img
                            src={`/cv/cv${card.id}.png?v=2`}
                            alt={`Candidate ${card.id} CV`}
                            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                          />
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Lane 3: Scrolling Upwards (Candidates 8 - 10) */}
                <div className="relative h-full overflow-hidden hidden lg:block">
                  <div className="flex flex-col gap-5 absolute w-full animate-marquee-vertical-up hover:[animation-play-state:paused]">
                    {[...Array(2)].flatMap((_, i) =>
                      [
                        { id: 8 },
                        { id: 9 },
                        { id: 10 }
                      ].map((card, idx) => (
                        <div
                          key={`lane3-${i}-${idx}-${card.id}`}
                          className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                        >
                          <img
                            src={`/cv/cv${card.id}.png?v=2`}
                            alt={`Candidate ${card.id} CV`}
                            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                          />
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6.5: PERFORMANCE DASHBOARD / SUCCESS METRICS */}
      <section className="py-24 bg-brand-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="badge">Operational Transparency</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Agency Operational Dashboard</h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto font-medium">
              We monitor recruitment cycles, placement efficiency, and database growths to maintain standardized ethical operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Image & Interactive Graph Card (7 columns) */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-auto border border-gray-200/50 shadow-md group hover:shadow-xl transition-all duration-300">
              {/* Office Image */}
              <Image
                src="/office.jpeg"
                alt="RS Agency Main Office"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-102 transition-transform duration-500"
              />
              {/* Dark tint overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Floating Graph Card */}
              <div className="absolute bottom-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 max-w-[240px] space-y-3 animate-float pointer-events-none">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Placement success</p>
                  <h4 className="text-xl font-black text-brand-dark">98.4% Rate</h4>
                </div>
                {/* SVG Graph */}
                <div className="h-14 w-full flex items-end">
                  <svg className="w-full h-10 text-brand-blue" viewBox="0 0 100 30" fill="none">
                    <path
                      d="M0,25 C15,12 25,28 45,15 C60,5 75,20 100,5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <circle cx="45" cy="15" r="3" fill="currentColor" />
                    <circle cx="100" cy="5" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex justify-between items-center text-[9px] font-bold text-gray-500 pt-1 border-t border-gray-100">
                  <span>DEPLOYED</span>
                  <span>Q4-TARGET</span>
                </div>
              </div>
            </div>

            {/* Right Stacked Cards (5 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
              {/* Top Black Card */}
              <div className="p-8 rounded-3xl bg-brand-dark text-white flex flex-col justify-between flex-1 relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/15 rounded-full blur-2xl"></div>

                <div className="flex items-center justify-between mb-8">
                  {/* Overlapping Circles Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10">
                    <svg className="w-7 h-7 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="9" cy="9" r="5" />
                      <circle cx="15" cy="9" r="5" />
                      <circle cx="12" cy="15" r="5" />
                    </svg>
                  </div>
                  {/* Up-Right Arrow Icon */}
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>

                <div>
                  <h3 className="text-5xl font-black tracking-tight mb-2">50,000+</h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Pre-vetted active profiles</p>
                </div>
              </div>

              {/* Bottom Gray Card */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200/60 text-brand-dark flex flex-col justify-between flex-1 group hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-lg">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-5xl font-black tracking-tight mb-2">10+</h3>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Deployments Completed</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: STATS COUNTER */}
      <section id="stats" className="py-20 bg-brand-dark text-white relative overflow-hidden">
        {/* Glow graphic overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Performance Benchmarks</span>
            <h2 className="text-3xl font-extrabold">RS Agency in Numbers</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <span className="block text-4xl sm:text-5xl font-black text-brand-cyan mb-2">100%</span>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">Legal Compliance</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <span className="block text-4xl sm:text-5xl font-black text-brand-cyan mb-2">Musaned</span>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">Portal Integration</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <span className="block text-4xl sm:text-5xl font-black text-brand-cyan mb-2">1</span>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">Sister Companies</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <span className="block text-4xl sm:text-5xl font-black text-brand-cyan mb-2">7</span>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">Demand Sectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT & CTA */}
      <section id="contact" className="py-24 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            {/* Left Contact Card Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="badge">Get Connected</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Ready to Build the Future?</h2>
                <p className="text-base text-gray-500 font-medium">
                  Whether you are an employer looking to recruit qualified talents or a candidate seeking international career growth, we are here to guide you.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                {/* Location */}
                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-dark text-sm">Head Office Location</h4>
                    <p className="text-xs text-gray-500 font-medium mt-1">Bole Dembel, Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                {/* Call/WhatsApp */}
                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-cyan/10 text-brand-blue shrink-0">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-dark text-sm">Call / WhatsApp</h4>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      <a href="tel:+251924054412" className="hover:text-brand-blue">+251 924 054 412</a>
                      <span className="mx-2 text-gray-300">|</span>
                      <a href="tel:+251960178117" className="hover:text-brand-blue">+251 960 178 117</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-dark text-sm">General Inquiries</h4>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      <a href="mailto:ziyuabdu@gmail.com" className="hover:text-brand-blue">ziyuabdu@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100/50 shadow-lg relative overflow-hidden">
                {/* Form header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-extrabold text-brand-dark">Send a Message</h3>
                  <p className="text-xs text-gray-400 mt-1 font-semibold">We typically respond within 24 business hours.</p>
                </div>

                {formSuccess ? (
                  <div className="py-12 text-center space-y-4 animate-fade-in">
                    <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 border border-green-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark">Thank You!</h4>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto font-medium">
                      Your inquiry has been successfully sent. A representative from RS Foreign Employment Agency will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setFormSuccess(false)}
                      className="px-6 py-2.5 text-sm font-bold text-brand-blue bg-brand-blue/5 hover:bg-brand-blue/10 rounded-xl transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name-input" className="text-xs font-extrabold text-brand-dark uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          id="name-input"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Your Number"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-input" className="text-xs font-extrabold text-brand-dark uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          id="phone-input"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="+000 000 000 000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="text-xs font-extrabold text-brand-dark uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        id="email-input"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="example@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message-input" className="text-xs font-extrabold text-brand-dark uppercase tracking-wider">Your Message</label>
                      <textarea
                        id="message-input"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 px-6 rounded-2xl bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-base shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/35 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {formLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
