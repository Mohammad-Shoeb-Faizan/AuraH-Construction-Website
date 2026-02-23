// src/components/sections/Contact.jsx
import React from 'react';
import { Section, SectionTitle } from '../common/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { companyInfo } from '../../data/company';
import Button from '../common/Button';

const Contact = () => {
    return (
        <Section id="contact" className="bg-[#020617] py-16 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                {/* reach out */}
                <div>
                    <SectionTitle
                        subtitle="Contact"
                        title="Get in Touch."
                    />
                    <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
                        Our engineering team is ready to consult on your next major project. Reach out to discuss technical requirements and scheduling.
                    </p>

                    <div className="space-y-10">
                        <div className="flex items-center space-x-8 group">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl">
                                <Mail size={24} className="text-primary group-hover:text-slate-900" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-1">Email Protocol</p>
                                <p className="text-xl font-bold text-white tracking-tight">{companyInfo.contact.emails[0]}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-8 group">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl">
                                <Phone size={24} className="text-primary group-hover:text-slate-900" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-1">Direct Line</p>
                                <p className="text-xl font-bold text-white tracking-tight">{companyInfo.contact.phones[0]}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-8 group">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl">
                                <MapPin size={24} className="text-primary group-hover:text-slate-900" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-1">Headquarters</p>
                                <p className="text-xl font-bold text-white tracking-tight">{companyInfo.contact.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact form */}
                <div className="lg:col-span-1 bg-white/5 p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-3xl backdrop-blur-2xl">
                    <form className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all placeholder:text-slate-600 font-bold"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all placeholder:text-slate-600 font-bold"
                                    placeholder="email@company.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Project Category</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all font-bold appearance-none">
                                <option className="bg-slate-950">Residential</option>
                                <option className="bg-slate-950">Commercial</option>
                                <option className="bg-slate-950">Infrastructure</option>
                                <option className="bg-slate-950">Consultation</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all placeholder:text-slate-600 font-bold resize-none"
                                placeholder="Describe your structural requirements..."
                            ></textarea>
                        </div>
                        <Button
                            variant="primary"
                            className="w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-primary/20"
                        >
                            Send Inquiry
                            <Send className="ml-3 w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
