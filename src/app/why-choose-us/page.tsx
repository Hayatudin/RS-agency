'use client';

import React, { useState } from 'react';
import { 
  Award, 
  Briefcase, 
  Layers, 
  Zap, 
  Scale, 
  CheckCircle2, 
  ArrowUpRight, 
  Globe, 
  ShieldAlert, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Fingerprint,
  FileCheck,
  Building,
  HelpCircle
} from 'lucide-react';

export default function WhyChooseUsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: 'Candidate Vetting',
      description: 'I want strict, multi-stage candidate clearance...',
      circleTitle: 'Direct Vetting',
      circleSubtitle: 'Fully Cleared candidates',
      cards: [
        { title: '100% Medical Clearance', label: 'Zero Health Issues' },
        { title: '5x Verification Standard', label: 'Biometric & fingerprint scans', highlight: true },
        { title: 'Embassy Approved Docs', label: 'Cleared for deployment' }
      ]
    },
    {
      id: 1,
      label: 'Musaned Integration',
      description: 'I want real-time digital contract uploads...',
      circleTitle: 'Musaned Link',
      circleSubtitle: '100% Digital compliance',
      cards: [
        { title: 'Real-time Contract Uploads', label: 'Direct portal linking' },
        { title: '5x Faster Processing Time', label: 'Accelerated through system', highlight: true },
        { title: 'IMIS System Approvals', label: 'Seamless government clearance' }
      ]
    },
    {
      id: 2,
      label: 'Sister Agency Network',
      description: 'I want integrated training & travel services...',
      circleTitle: 'Support Network',
      circleSubtitle: 'Full logistics coordination',
      cards: [
        { title: '4 Coordinated Agencies', label: 'Training, legal & travel' },
        { title: '5x Seamless Deployment', label: 'Airport pickup & landing orientation', highlight: true },
        { title: 'Onsite Handover Coordination', label: 'Zero employer onboarding hassle' }
      ]
    }
  ];

  const sectors = [
    {
      num: 'OPTION 01',
      title: 'CONSTRUCTION SECTOR',
      descriptions: [
        'General Laborers & Masons',
        'Carpenters & Steel Fixers',
        'Electricians & Welder Crews',
        'Heavy Equipment Operators'
      ]
    },
    {
      num: 'OPTION 02',
      title: 'MANUFACTURING & INDUSTRIAL',
      descriptions: [
        'Production & Factory Operators',
        'Machine Setters & Assemblers',
        'Packaging Crews & Packers',
        'Warehouse Logistics Operators'
      ]
    },
    {
      num: 'OPTION 03',
      title: 'LOGISTICS & TRANSPORTATION',
      descriptions: [
        'Truck & Delivery Drivers',
        'Forklift Operators & Cargo Handlers',
        'Warehouse Sorting Staff',
        'Couriers & Last-Mile Drivers'
      ]
    },
    {
      num: 'OPTION 04',
      title: 'HOSPITALITY & SERVICE',
      descriptions: [
        'Waiters, Bartenders & Hosts',
        'Housekeepers & Room Cleaners',
        'Cooks, Chefs & Kitchen Staff',
        'Laundry & Utility Assistants'
      ]
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-grid-pattern">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Mockup Top Section: Left-aligned Title, Description, and Action Button */}
        <div className="max-w-3xl pt-6 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/15 text-brand-blue text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Integrated Placement Platforms</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight leading-[1.05]">
            Turn Recruitment Needs Into <br />
            <span className="text-gradient">Compliant Placements</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-500 font-semibold leading-relaxed max-w-xl">
            We streamline global recruitment with Musaned database integration, official Ministry vetting, and pre-departure logistics. Select a system focus area below to view our process.
          </p>

          <div className="flex pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-indigo-600 text-white font-extrabold text-xs shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/35 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Started Today
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </a>
          </div>

          {/* Partner & Compliance Integrations */}
          <div className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              Musaned
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-brand-cyan" />
              Ministry Vetted
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-brand-blue" />
              IMIS Network
            </span>
          </div>
        </div>

        {/* Mockup Interactive Diagram Block */}
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-200/60 shadow-xl space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl lg:text-3xl font-black text-brand-dark">Process Verification System</h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Click the tabs on the left to see dynamic validation paths</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Selector tabs (CodeGuide selector layout) */}
            <div className="lg:col-span-4 space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    activeTab === tab.id
                      ? 'bg-white border-brand-blue/30 shadow-md shadow-brand-blue/5 translate-x-1.5'
                      : 'bg-brand-light/30 border-transparent hover:bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-brand-blue uppercase tracking-widest">
                      Option 0{tab.id + 1}
                    </span>
                    <h4 className="font-extrabold text-sm text-brand-dark leading-tight">
                      {tab.label}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-semibold">{tab.description}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                    activeTab === tab.id ? 'bg-brand-blue text-white' : 'bg-slate-200 text-gray-400'
                  }`}>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              ))}
            </div>

            {/* Center: Large sleeker circular display with gradient ring border (CodeGuide central circle) */}
            <div className="lg:col-span-4 flex justify-center py-6 relative">
              {/* Connecting line overlays */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-gray-100 via-brand-blue/20 to-gray-100 pointer-events-none hidden lg:block z-0"></div>
              
              <div className="relative w-64 h-64 rounded-full bg-white flex flex-col items-center justify-center text-center p-6 border-4 border-brand-blue/30 shadow-2xl relative z-10 group bg-radial-gradient">
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-brand-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping pointer-events-none"></div>

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-indigo-600 flex items-center justify-center text-white shadow-lg mb-4">
                  {activeTab === 0 && <Fingerprint className="w-8 h-8 text-brand-cyan" />}
                  {activeTab === 1 && <Cpu className="w-8 h-8 text-brand-cyan" />}
                  {activeTab === 2 && <Building className="w-8 h-8 text-brand-cyan" />}
                </div>

                <h3 className="font-black text-lg text-brand-dark leading-tight">
                  {tabs[activeTab].circleTitle}
                </h3>
                <p className="text-[10px] text-brand-blue uppercase font-bold tracking-widest mt-1">
                  {tabs[activeTab].circleSubtitle}
                </p>
              </div>
            </div>

            {/* Right side: Floating stats cards linked by lines (CodeGuide stats layout) */}
            <div className="lg:col-span-4 space-y-4">
              {tabs[activeTab].cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    card.highlight
                      ? 'bg-white border-brand-blue/20 shadow-md translate-x-1.5'
                      : 'bg-white border-gray-100/50 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${
                      card.highlight ? 'bg-brand-blue text-white shadow-sm' : 'bg-slate-100 text-gray-500'
                    }`}>
                      {card.highlight ? '★' : '✓'}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-brand-dark text-xs leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                        {card.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Romanian Labor Market Opportunities Section */}
        <div className="space-y-12 pt-6 border-t border-gray-200/40">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="badge uppercase tracking-wider text-brand-blue bg-brand-blue/5 border border-brand-blue/15 px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Romanian Labor Demand
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">
              Romanian Market Opportunities & Focus Areas
            </h2>
            <p className="text-sm text-gray-500 font-semibold leading-relaxed">
              Romania is experiencing strong demand for both skilled and unskilled talent. We bridge these gaps by aligning Ethiopian professionals with key high-growth industries.
            </p>
          </div>

          {/* Infographic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector) => (
              <div 
                key={sector.title}
                className="relative bg-white rounded-3xl p-6 shadow-sm border border-gray-200/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between min-h-[300px]"
              >
                {/* Decorative border layout */}
                <div className="absolute top-4 right-4 text-[10px] font-extrabold text-brand-blue bg-brand-blue/5 px-2.5 py-1 rounded-lg">
                  {sector.num}
                </div>
                
                <div className="space-y-4 mt-4">
                  <h3 className="font-extrabold text-sm text-brand-dark tracking-wide uppercase">
                    {sector.title}
                  </h3>
                  
                  <ul className="space-y-2 text-xs text-gray-500 font-semibold">
                    {sector.descriptions.map((desc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-[10px] font-extrabold text-brand-blue uppercase tracking-wider">
                  <span>Romania Opportunity</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
              </div>
            ))}
          </div>

          {/* Core Focus Note */}
          <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto text-center md:text-left">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue text-white shrink-0 shadow-md">
              <ShieldAlert className="w-6 h-6 text-brand-cyan" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-brand-dark uppercase">Vocational Training Integration</h4>
              <p className="text-xs text-gray-500 font-semibold mt-0.5 leading-relaxed">
                Every candidate is pre-qualified in these sectors via our Ethio-Arab vocational facilities. Handlers, truck drivers, construction workers, and cooks undergo tailored industry orientation and safety certifications before final departure.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
