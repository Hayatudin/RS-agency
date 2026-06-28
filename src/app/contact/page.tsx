'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call success
    setFormSuccess(true);
    setFormState({ name: '', phone: '', email: '', message: '' });
  };

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
              <Mail className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Get Connected</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight leading-none">
              Contact <span className="text-gradient">Our Team</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-semibold leading-relaxed">
              Whether you are an employer looking to recruit qualified talents or a candidate seeking international career growth, we are here to guide you.
            </p>
          </div>
        </div>

        {/* Contact Info & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-brand-dark">Headquarters & Inquiries</h2>
              <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                Connect with our advisors directly through phone, email, or visit our headquarters in Addis Ababa. Our team coordinates licensing, compliance, and client onboarding daily.
              </p>
            </div>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-dark text-sm">Head Office Location</h4>
                  <p className="text-xs text-gray-500 font-semibold mt-1">Bole Dembel, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              {/* Call/WhatsApp */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-cyan/10 text-brand-blue shrink-0">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-dark text-sm">Call / WhatsApp</h4>
                  <p className="text-xs text-gray-500 font-semibold mt-1">
                    <a href="tel:+251924054412" className="hover:text-brand-blue transition-colors">+251 924 054 412</a>
                    <span className="mx-2 text-gray-300">|</span>
                    <a href="tel:+251960178117" className="hover:text-brand-blue transition-colors">+251 960 178 117</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-dark text-sm">General Inquiries</h4>
                  <p className="text-xs text-gray-500 font-semibold mt-1">
                    <a href="mailto:ziyuabdu@gmail.com" className="hover:text-brand-blue transition-colors">ziyuabdu@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-cyan/10 text-brand-blue shrink-0">
                  <Clock className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-dark text-sm">Office Hours</h4>
                  <p className="text-xs text-gray-500 font-semibold mt-1">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/60 shadow-lg relative overflow-hidden">
              {/* Form header */}
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-brand-dark">Send a Message</h3>
                <p className="text-xs text-gray-400 mt-1 font-semibold">We typically respond within 24 business hours.</p>
              </div>

              {formSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 border border-green-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark">Thank You!</h4>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto font-semibold">
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
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/80 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm font-semibold transition-all"
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
                        placeholder="+251 900 000 000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/80 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm font-semibold transition-all"
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
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/80 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm font-semibold transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message-input" className="text-xs font-extrabold text-brand-dark uppercase tracking-wider">Your Message</label>
                    <textarea
                      id="message-input"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your staffing requirements or request candidate access details..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/80 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none text-sm font-semibold transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-0.5"
                  >
                    Send Inquiry Message
                    <Send className="w-4 h-4 text-brand-cyan" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
