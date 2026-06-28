import React from 'react';
import { Megaphone, Users, ClipboardCheck, Database, Heart, ArrowRight, Shield, Globe, Plane } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      num: '01',
      title: 'Strategic Advertising & Search',
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

  const operationalWorkflows = [
    {
      title: 'Visa & Documentation Processing',
      icon: Shield,
      description: 'We handle complete documentation vetting, passport registration, embassy scheduling, and legal labor contract authorization.'
    },
    {
      title: 'Vocational Training & Language Vetting',
      icon: Globe,
      description: 'Candidates receive language training and safety orientation through our Ethio-Arab vocational facilities to hit the ground running.'
    },
    {
      title: 'Logistics & Departure Coordination',
      icon: Plane,
      description: 'Full travel coordination including flights booking, airport guidance, pre-departure briefings, and arrival tracking with international partners.'
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
              <ClipboardCheck className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Full-Service Agency</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight leading-none">
              Our Professional <span className="text-gradient">Services</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-semibold leading-relaxed">
              From targeted campaigns to pre-departure validation, we coordinate the end-to-end global placement of verified talent.
            </p>
          </div>
        </div>

        {/* Primary Services Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight">Core Placement Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.title} 
                  className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group min-h-[220px]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-extrabold text-brand-blue bg-brand-blue/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Service {service.num}
                      </span>
                    </div>
                    
                    <h3 className="font-extrabold text-base text-brand-dark leading-tight mt-4">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operational / Support Services */}
        <div className="space-y-8 pt-10 border-t border-gray-200/60">
          <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight">Deployment & Logistics Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operationalWorkflows.map((flow) => {
              const IconComp = flow.icon;
              return (
                <div key={flow.title} className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue shrink-0">
                    <IconComp className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-brand-dark text-sm leading-tight">{flow.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">{flow.description}</p>
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
