import React from 'react';
import Image from 'next/image';
import { Calendar, Users, Award, ShieldCheck, Briefcase } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
  color: string;
}

export default function TeamPage() {
  const team: TeamMember[] = [
    {
      name: 'Aisha Birka',
      role: 'CEO',
      experience: '4 YOE',
      image: '/team/Aisha.jpeg',
      color: 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-600',
    },
    {
      name: 'Ansar Abdurehman',
      role: 'Monitoring & Oversight Staff',
      experience: '4 YOE',
      image: '/team/Ansar.jpeg',
      color: 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-600',
    },
    {
      name: 'Eyuel Tekle',
      role: 'Operations Director',
      experience: '2 YOE',
      image: '/team/Eyuel.jpeg',
      color: 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600',
    },
    {
      name: 'Hawa Mujib',
      role: 'Legal & Grievance staff',
      experience: '3 YOE',
      image: '/team/Hawa.jpeg',
      color: 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-600',
    },
    {
      name: 'Hayat Ahmed',
      role: 'Head of Recruitment',
      experience: '3 YOE',
      image: '/team/Hayat.jpeg',
      color: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600',
    },
    {
      name: 'Hayat Shikur',
      role: 'IT & Digital staff',
      experience: '4 YOE',
      image: '/team/Hayat2.jpeg',
      color: 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-600',
    },
    {
      name: 'Huda Nejib',
      role: 'CV Write/Resume Officer',
      experience: '2 YOE',
      image: '/team/Huda.jpeg',
      color: 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-600',
    },
    {
      name: 'Marshet Shimelis',
      role: 'CV Screening Specialist',
      experience: '3 YOE',
      image: '/team/Marshet.jpeg',
      color: 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-600',
    },
    {
      name: 'Mubarek Osman',
      role: 'Training & Competency staff',
      experience: '3 YOE',
      image: '/team/Mubarek.jpeg',
      color: 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600',
    },
    {
      name: 'Murtesa Abdurezak',
      role: 'Legal Compliance Director',
      experience: '1 YOE',
      image: '/team/Murtesa.jpeg',
      color: 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-600',
    },
    {
      name: 'Neima Jemal',
      role: 'Advisory & Conseling staff',
      experience: '2 YOE',
      image: '/team/Neima.jpeg',
      color: 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600',
    },
    {
      name: 'Rahma Abdurehim',
      role: 'Candidate Relations Specialist',
      experience: '3 YOE',
      image: '/team/Rahma.jpeg',
      color: 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-600',
    },
    {
      name: 'Sabah Muhaba',
      role: 'PR & External Liaison Staff',
      experience: '4 YOE',
      image: '/team/Sabah.jpeg',
      color: 'bg-violet-500/10 hover:bg-violet-500/20 text-violet-600',
    },
    {
      name: 'Semira Abdulshekur',
      role: 'Customer Service Representative',
      experience: '2 YOE',
      image: '/team/Semira.jpeg',
      color: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600',
    },
    {
      name: 'Semira Surur',
      role: 'Finance Manager',
      experience: '2 YOE',
      image: '/team/Semira2.jpeg',
      color: 'bg-pink-500/10 hover:bg-pink-500/20 text-pink-600',
    },
    {
      name: 'Zinet Yimer',
      role: 'Citizen Support & Monitoring Staff',
      experience: '4 YOE',
      image: '/team/Zinet.jpeg',
      color: 'bg-slate-500/10 hover:bg-slate-500/20 text-slate-600',
    },
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/15 text-brand-blue text-sm font-semibold">
              <Users className="w-4 h-4 text-brand-cyan" />
              <span>RS Agency Specialists</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight leading-none">
              RS Foreign Employment <br />
              <span className="text-gradient">Agency Team</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-semibold leading-relaxed">
              Meet the dedicated professionals working together with DAERA to connect skilled talent with global opportunities. Our team maintains standard vetting, vocational validation, and seamless travel logistics.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-600 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-brand-blue" />
              October 2025
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-600 shadow-sm">
              Core Operations Department
            </span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group overflow-hidden"
              style={{
                animation: `slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 0.05}s`,
                opacity: 0,
              }}
            >
              {/* Role badge */}
              <div className="mb-3">
                <span className={`inline-flex px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wide bg-brand-blue/5 text-brand-blue`}>
                  {member.role.split(' (')[0]}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-lg font-black text-brand-dark tracking-tight mb-4 truncate" title={member.name}>
                {member.name}
              </h3>

              {/* Profile Image & Colored Container */}
              <div className={`relative flex-1 aspect-[4/5] rounded-xl overflow-hidden ${member.color.split(' ')[0]} border border-gray-150 flex items-end justify-center p-2 transition-colors duration-300`}>
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-inner bg-gray-50/50">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    style={{ objectFit: 'cover' }}
                    loading="eager"
                    className="group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Experience/Age Pill */}
                <div className="absolute bottom-4 left-4 px-2 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[9px] font-black text-brand-dark shadow-md flex items-center gap-1">
                  <Briefcase className="w-2.5 h-2.5 text-brand-blue animate-pulse" />
                  {member.experience}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Team Info CTA banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-dark text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Professional Standardized Recruitment</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-semibold">
              Our core team is committed to ethical compliance, comprehensive candidate training, and swift processing. If you have any inquiries regarding our recruitment strategies or placement opportunities, get in touch with our team today.
            </p>
            <div className="pt-2">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-sm shadow-lg transition-all hover:-translate-y-0.5"
              >
                Reach Out to Our Team
                <Award className="w-4 h-4 text-brand-cyan" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
