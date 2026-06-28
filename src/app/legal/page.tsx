'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, FileCheck, ExternalLink, Download, X, Eye, BadgeCheck, FileText, ArrowRight } from 'lucide-react';

export default function LegalPage() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const portraitDocuments = [
    {
      id: 'doc1',
      title: 'Registration License (Page 1)',
      subtitle: 'Commercial Vetting & Registration',
      image: '/Doc1.png',
      description: 'Official corporate registration and commercial business license, verifying RS Agency as an authorized PLC entity.',
      badge: 'Registered'
    },
    {
      id: 'doc2',
      title: 'Registration License (Page 2)',
      subtitle: 'Commercial Trade Certification',
      image: '/Doc2.png',
      description: 'Supporting commercial business registration details, listing compliance clearances and official government stamps.',
      badge: 'Verified'
    }
  ];

  const landscapeDocuments = [
    {
      id: 'certificate',
      title: 'Ministry of Labor Certificate',
      subtitle: 'Official Overseas Recruitment License',
      image: '/Certificate.png',
      description: 'The official agency accreditation certificate issued by the Ministry of Labor and Skills of Ethiopia, authorizing international job placement services.',
      badge: 'Active License'
    },
    {
      id: 'id',
      title: 'Agency Representative ID',
      subtitle: 'Director Accreditation Card',
      image: '/ID.jpeg',
      description: 'Official government-issued identification for the agency representative, confirming legal credentials and authority.',
      badge: 'Accredited'
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
              <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Verified Credentials</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight leading-none">
              Legal Status & <span className="text-gradient">Licensing</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-semibold leading-relaxed">
              RS Foreign Employment Agency operates with full government authorization, licensed by the Ministry of Labor & Skills of Ethiopia.
            </p>
          </div>
        </div>

        {/* Hero Section - Inspired by the Design Inspiration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-brand-dark leading-tight">
              100% Compliant and <br />
              Ethically Bonded Operations
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              We understand that global workforce placement requires the highest level of trust and legal integrity. RS Agency maintains formal certifications, structural bonding, and official audits to safeguard both our hiring employers and deployed candidates.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              Our operations are fully coordinated with municipal authorities, labor offices, and ministries to ensure compliance with the latest regulations, ensuring zero deployment interruptions.
            </p>
            
            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                Inquire For Partnership
                <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
              </a>
            </div>
          </div>

          {/* Right Layout - Staggered/Overlapping Document cards inspired by design mockup */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative min-h-[380px] sm:min-h-[420px]">
            {/* Top Card: Compliance Numbers (matches the "2300+" inspiration box) */}
            <div className="col-span-6 bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Compliance</span>
              <div className="mt-4">
                <span className="text-4xl font-black text-brand-dark">100%</span>
                <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase">Government Approved</p>
              </div>
            </div>

            {/* Overlapping document thumbnail: Ministry Certificate */}
            <div 
              onClick={() => setSelectedDoc('/Certificate.png')}
              className="col-span-6 bg-white p-3 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer transition-all duration-300 flex flex-col gap-2 group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-gray-100">
                <Image
                  src="/Certificate.png"
                  alt="License Certificate preview"
                  fill
                  sizes="200px"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                  <Eye className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-[9px] font-extrabold text-brand-dark truncate">Ministry Certificate</span>
            </div>

            {/* Middle Big Card: signing table image block */}
            <div 
              onClick={() => setSelectedDoc('/Doc1.png')}
              className="col-span-8 bg-white p-3 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer transition-all duration-300 flex flex-col gap-2 group"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-50 border border-gray-100">
                <Image
                  src="/Doc1.png"
                  alt="Registration Document Preview"
                  fill
                  sizes="300px"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-[9px] font-extrabold text-brand-dark">Registration & Trade License</span>
            </div>

            {/* Bottom Card: Vetted Status (matches the "3000+" inspiration box) */}
            <div className="col-span-4 bg-brand-dark p-6 rounded-2xl shadow-lg flex flex-col justify-between text-white">
              <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider">Vetting</span>
              <div className="mt-4">
                <span className="text-3xl font-black">100%</span>
                <p className="text-[9px] text-white/60 font-bold mt-0.5 uppercase">Medically Cleared</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip separated by vertical lines - Inspired by the "O нас" bottom stats strip */}
        <div className="py-8 border-y border-gray-200/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-3xl font-black text-brand-dark">Certified</p>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Ethio-Arab Training Facility</p>
          </div>
          <div className="space-y-1 border-y md:border-y-0 md:border-x border-gray-200/60 py-4 md:py-0">
            <p className="text-3xl font-black text-brand-blue">100%</p>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Ministry Compliance Rating</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-black text-brand-dark">Standard</p>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Musaned Portal Processing</p>
          </div>
        </div>

        {/* Legal Documents Interactive Gallery Section */}
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="badge uppercase tracking-wider text-brand-blue bg-brand-blue/5 border border-brand-blue/15 px-4 py-1.5 rounded-full text-xs font-bold inline-block">
              Interactive Gallery
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark">Official Credentials & Permits</h2>
            <p className="text-sm text-gray-500 font-semibold leading-relaxed">
              Click any document card to open a high-resolution preview and review the government-licensed seals.
            </p>
          </div>

          {/* Section A: Accreditations & Licenses (Landscape Documents) */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-brand-dark border-l-4 border-brand-blue pl-3">
              Accreditation & Representative Credentials
            </h3>
            <p className="text-xs text-gray-400 font-semibold -mt-2">Official landscape credentials authorizing international operations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {landscapeDocuments.map((doc) => (
                <div 
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc.image)}
                  className="bg-white rounded-3xl p-5 border border-gray-200/60 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between group min-h-[340px]"
                >
                  <div className="space-y-4">
                    {/* Top Badge Check */}
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                        <BadgeCheck className="w-3 h-3 shrink-0" />
                        {doc.badge}
                      </span>
                      <span className="text-gray-400 group-hover:text-brand-blue transition-colors">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Document preview container - Landscape ratio */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-gray-100 flex items-center justify-center p-2">
                      <Image
                        src={doc.image}
                        alt={doc.title}
                        fill
                        sizes="500px"
                        style={{ objectFit: 'contain' }}
                        className="group-hover:scale-[1.01] transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                        <div className="p-3 rounded-full bg-white/95 backdrop-blur-sm text-brand-dark flex items-center gap-1.5 text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-4 h-4 text-brand-blue" />
                          Inspect Document
                        </div>
                      </div>
                    </div>

                    {/* Text details */}
                    <div className="space-y-1.5 pt-2">
                      <h3 className="font-extrabold text-sm text-brand-dark leading-tight group-hover:text-brand-blue transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{doc.subtitle}</p>
                      <p className="text-[11px] text-gray-500 font-semibold leading-relaxed pt-1.5">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section B: Corporate Registry & Business Licenses (Portrait Documents) */}
          <div className="space-y-6 pt-8 border-t border-gray-200/40">
            <h3 className="text-xl font-extrabold text-brand-dark border-l-4 border-brand-cyan pl-3">
              Corporate Registry & Business Licenses
            </h3>
            <p className="text-xs text-gray-400 font-semibold -mt-2">Official portrait page scans outlining standard corporate registration details.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portraitDocuments.map((doc) => (
                <div 
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc.image)}
                  className="bg-white rounded-3xl p-5 border border-gray-200/60 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between group min-h-[380px]"
                >
                  <div className="space-y-4">
                    {/* Top Badge Check */}
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                        <BadgeCheck className="w-3 h-3 shrink-0" />
                        {doc.badge}
                      </span>
                      <span className="text-gray-400 group-hover:text-brand-blue transition-colors">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Document preview container - Portrait ratio */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-50 border border-gray-100 flex items-center justify-center p-2">
                      <Image
                        src={doc.image}
                        alt={doc.title}
                        fill
                        sizes="400px"
                        style={{ objectFit: 'contain' }}
                        className="group-hover:scale-[1.01] transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                        <div className="p-3 rounded-full bg-white/95 backdrop-blur-sm text-brand-dark flex items-center gap-1.5 text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-4 h-4 text-brand-blue" />
                          Inspect Document
                        </div>
                      </div>
                    </div>

                    {/* Text details */}
                    <div className="space-y-1.5 pt-2">
                      <h3 className="font-extrabold text-sm text-brand-dark leading-tight group-hover:text-brand-blue transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{doc.subtitle}</p>
                      <p className="text-[11px] text-gray-500 font-semibold leading-relaxed pt-1.5">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* FULL-SCREEN INTERACTIVE MODAL */}
      {selectedDoc && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in pointer-events-auto"
          onClick={() => setSelectedDoc(null)}
        >
          <div 
            className="relative bg-white rounded-3xl p-3 max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl animate-scale-up border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 px-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-extrabold text-brand-dark uppercase tracking-wider">
                  {selectedDoc.split('/').pop()?.split('.')[0] || 'Official Document'}
                </span>
              </div>
              <button 
                onClick={() => setSelectedDoc(null)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Document Image */}
            <div className="relative flex-1 min-h-[400px] w-full mt-3 rounded-2xl overflow-y-auto overflow-x-hidden bg-slate-100 flex items-start justify-center p-2">
              <div className="relative w-full aspect-[3/4] max-w-lg min-h-[500px]">
                <Image
                  src={selectedDoc}
                  alt="High resolution document preview"
                  fill
                  sizes="800px"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 px-3 border-t border-gray-100">
              <a 
                href={selectedDoc} 
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Document
              </a>
              <button 
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-gray-700 font-bold text-xs transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
