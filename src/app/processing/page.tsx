'use client';

import React from 'react';
import { 
  Users, 
  FileText, 
  FileCheck, 
  Fingerprint, 
  FolderOpen, 
  CloudLightning, 
  Plane, 
  Smile, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Clock
} from 'lucide-react';

export default function ProcessingStepsPage() {
  const steps = [
    {
      id: 1,
      num: 'STEP 01',
      title: 'Interview & Registration',
      duration: '1 Day',
      icon: Users,
      color: 'from-emerald-500 to-teal-600 shadow-emerald-500/10',
      details: [
        'Conduct initial interview to evaluate qualifications',
        'Register candidate into the agency database'
      ]
    },
    {
      id: 2,
      num: 'STEP 02',
      title: 'CV Preparation & Upload',
      duration: 'Ongoing',
      icon: FileText,
      color: 'from-blue-500 to-indigo-600 shadow-blue-500/10',
      details: [
        'Prepare the candidate\'s standardized profile and CV',
        'Upload portfolio directly to the Musaned platform'
      ]
    },
    {
      id: 3,
      num: 'STEP 03',
      title: 'Contract & Medical Checkup',
      duration: '3 Days',
      icon: FileCheck,
      color: 'from-purple-500 to-indigo-600 shadow-purple-500/10',
      details: [
        'Finalize and sign the recruitment contract',
        'Conduct required medical checkup & receive clearances'
      ]
    },
    {
      id: 4,
      num: 'STEP 04',
      title: 'Biometric Data Collection',
      duration: '1-2 Days',
      icon: Fingerprint,
      color: 'from-cyan-500 to-blue-600 shadow-cyan-500/10',
      details: [
        'Obtain biometric records & scan fingerprints',
        'Complete registration with local passport controls'
      ]
    },
    {
      id: 5,
      num: 'STEP 05',
      title: 'Document Prep & Gathering',
      duration: '15-20 Days',
      icon: FolderOpen,
      color: 'from-amber-500 to-orange-600 shadow-amber-500/10',
      details: [
        'Gather, organize and verify all required documentation',
        'Arrange legal seals and government visa files'
      ]
    },
    {
      id: 6,
      num: 'STEP 06',
      title: 'Submission to IMIS System',
      duration: 'Awaiting Approval',
      icon: CloudLightning,
      color: 'from-pink-500 to-rose-600 shadow-pink-500/10',
      details: [
        'Submit the verified document set to the IMIS system',
        'Await official government visa authorization'
      ]
    },
    {
      id: 7,
      num: 'STEP 07',
      title: 'Travel Arrangements',
      duration: '5 Days',
      icon: Plane,
      color: 'from-sky-500 to-brand-blue shadow-sky-500/10',
      details: [
        'Book travel tickets and coordinate departure schedules',
        'Finalize departure date after IMIS approval and stamping'
      ]
    },
    {
      id: 8,
      num: 'STEP 08',
      title: 'Arrival & Handover',
      duration: 'Arrival Day',
      icon: Smile,
      color: 'from-teal-500 to-emerald-600 shadow-teal-500/10',
      details: [
        'Coordinate airport arrival and safe pickup logistics',
        'Formal handover to employer with integration support'
      ]
    }
  ];

  // Serpentine display order for desktop grid (4 columns x 2 rows)
  // Row 1 goes left to right: Step 1 (col 1), Step 2 (col 2), Step 3 (col 3), Step 4 (col 4)
  // Row 2 loops back right to left: Step 8 (col 1), Step 7 (col 2), Step 6 (col 3), Step 5 (col 4)
  // To lay them out naturally in a grid so they visually read serpentine:
  // Grid Index 0 (col 1, row 1) -> Step 1 (id: 1)
  // Grid Index 1 (col 2, row 1) -> Step 2 (id: 2)
  // Grid Index 2 (col 3, row 1) -> Step 3 (id: 3)
  // Grid Index 3 (col 4, row 1) -> Step 4 (id: 4)
  // Grid Index 4 (col 1, row 2) -> Step 8 (id: 8) (Reads right-to-left serpentine: 5, 6, 7, 8 in visual order, so column-wise: 8, 7, 6, 5)
  // Grid Index 5 (col 2, row 2) -> Step 7 (id: 7)
  // Grid Index 6 (col 3, row 2) -> Step 6 (id: 6)
  // Grid Index 7 (col 4, row 2) -> Step 5 (id: 5)
  const desktopOrderSteps = [
    steps[0], // Step 1
    steps[1], // Step 2
    steps[2], // Step 3
    steps[3], // Step 4
    steps[7], // Step 8 (col 1, row 2)
    steps[6], // Step 7 (col 2, row 2)
    steps[5], // Step 6 (col 3, row 2)
    steps[4]  // Step 5 (col 4, row 2)
  ];

  return (
    <div className="bg-brand-light min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-grid-pattern">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200/60">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/15 text-brand-blue text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Workflow Milestones</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight leading-none">
              Steps of <span className="text-gradient">Processing</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-semibold leading-relaxed">
              Our structured 8-step pipeline for candidate placement, showing the milestones from recruitment registration to final travel deployment.
            </p>
          </div>
        </div>

        {/* Desktop Serpentine Winding Timeline Layout (lg and up) */}
        <div className="hidden lg:block relative py-10">
          {/* Curvy background S-shaped connector line */}
          <div className="absolute top-1/4 bottom-1/4 left-10 right-10 pointer-events-none z-0">
            {/* Row 1 horizontal line */}
            <div className="absolute top-12 left-20 right-20 h-1 bg-gradient-to-r from-emerald-500 via-indigo-500 to-blue-600 rounded-full"></div>
            {/* Loop down right connector */}
            <div className="absolute right-20 top-12 w-20 h-[170px] border-r-4 border-b-4 border-gray-200 rounded-tr-3xl rounded-br-3xl"></div>
            {/* Row 2 horizontal line (going left) */}
            <div className="absolute top-[220px] left-20 right-20 h-1 bg-gradient-to-l from-cyan-500 via-orange-500 to-rose-600 rounded-full"></div>
          </div>

          {/* Serpentine Grid Display */}
          <div className="grid grid-cols-4 gap-x-8 gap-y-24 relative z-10">
            {desktopOrderSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isRow1 = idx < 4;
              
              return (
                <div 
                  key={step.id} 
                  className="bg-white rounded-3xl p-6 border border-gray-200/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px] relative group"
                >
                  {/* Step ID Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-brand-blue bg-brand-blue/5 px-2.5 py-1 rounded-lg">
                      {step.num}
                    </span>
                    
                    {/* Winding Arrow Direction Indicators */}
                    {isRow1 && idx < 3 && (
                      <ArrowRight className="w-4 h-4 text-gray-300 absolute -right-6 top-1/2 -translate-y-1/2 hidden group-hover:block animate-bounce-x" />
                    )}
                    {!isRow1 && idx < 7 && idx > 4 && (
                      <ChevronLeft className="w-5 h-5 text-gray-300 absolute -left-6 top-1/2 -translate-y-1/2 hidden group-hover:block" />
                    )}
                  </div>

                  <div className="space-y-3 mt-4">
                    {/* Duration Pill */}
                    <div className="inline-flex items-center gap-1 text-[9px] font-extrabold text-brand-blue bg-brand-blue/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      <Clock className="w-2.5 h-2.5" />
                      {step.duration}
                    </div>

                    <h3 className="font-extrabold text-sm text-brand-dark leading-tight flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${step.color} text-white shrink-0`}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      {step.title}
                    </h3>
                    
                    <ul className="space-y-1.5 text-[11px] text-gray-500 font-semibold pt-1">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Linear Stack Layout (hidden on lg) */}
        <div className="block lg:hidden relative pl-6 space-y-12">
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-2.5 w-0.5 bg-gradient-to-b from-emerald-500 via-indigo-500 to-teal-500 rounded-full z-0"></div>

          {steps.map((step) => {
            const IconComp = step.icon;
            
            return (
              <div 
                key={step.id} 
                className="relative bg-white rounded-3xl p-6 border border-gray-200/60 shadow-sm flex flex-col justify-between gap-4 z-10 hover:shadow-md transition-all"
              >
                {/* Timeline connector dot */}
                <div className={`absolute -left-[22px] top-6 w-3 h-3 rounded-full bg-gradient-to-br ${step.color} border-2 border-white shadow-sm`} />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-brand-blue bg-brand-blue/5 px-2.5 py-1 rounded-lg">
                    {step.num}
                  </span>
                  <div className="inline-flex items-center gap-1 text-[9px] font-extrabold text-brand-blue bg-brand-blue/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    <Clock className="w-2.5 h-2.5" />
                    {step.duration}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-sm text-brand-dark flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-br ${step.color} text-white shrink-0`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    {step.title}
                  </h3>

                  <ul className="space-y-1 text-xs text-gray-500 font-semibold pl-2">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
