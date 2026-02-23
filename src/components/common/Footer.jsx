// src/components/common/Footer.jsx
import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { companyInfo } from '../../data/company';
import { scrollToSection } from '../../utils/navigation';

const Footer = () => {
    return (
        <footer className="bg-[#020617] text-slate-400 pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={(e) => scrollToSection(e, '#home')}
                        >
                            <div className="bg-primary p-1.5 rounded-lg">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-heading font-black tracking-tighter text-white uppercase">
                                {companyInfo.name}<span className="text-primary italic">{companyInfo.nameSecondary}</span>
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-xs font-bold text-sm uppercase tracking-wider">
                            Professional structural engineering and construction management. Built for technical excellence and reliability.
                        </p>
                        <div className="flex space-x-4">
                            <a href={companyInfo.contact.socials.facebook} className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all duration-500 shadow-2xl group">
                                <Facebook size={18} className="text-primary group-hover:text-slate-900" />
                            </a>
                            <a href={companyInfo.contact.socials.twitter} className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all duration-500 shadow-2xl group">
                                <Twitter size={18} className="text-primary group-hover:text-slate-900" />
                            </a>
                            <a href={companyInfo.contact.socials.instagram} className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all duration-500 shadow-2xl group">
                                <Instagram size={18} className="text-primary group-hover:text-slate-900" />
                            </a>
                            <a href={companyInfo.contact.socials.linkedin} className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all duration-500 shadow-2xl group">
                                <Linkedin size={18} className="text-primary group-hover:text-slate-900" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xs font-black mb-10 text-primary uppercase tracking-[0.3em]">
                            Information
                        </h4>
                        <ul className="space-y-5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-slate-400 hover:text-primary transition-all flex items-center space-x-3 group font-bold text-sm uppercase tracking-widest"
                                    >
                                        <span className="w-0 group-hover:w-3 h-[2px] bg-primary transition-all duration-500"></span>
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-black mb-10 text-primary uppercase tracking-[0.3em]">
                            The Studio
                        </h4>
                        <ul className="space-y-8">
                            <li className="flex items-start space-x-6">
                                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl mt-1">
                                    <MapPin size={18} className="text-primary" />
                                </div>
                                <span className="text-slate-400 font-bold text-sm leading-relaxed">{companyInfo.contact.address}</span>
                            </li>
                            <li className="flex items-center space-x-6">
                                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                                    <Phone size={18} className="text-primary" />
                                </div>
                                <span className="text-slate-400 font-bold text-sm">{companyInfo.contact.phones[0]}</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="text-xs font-black mb-10 text-primary uppercase tracking-[0.3em]">
                            Opportunities
                        </h4>
                        <p className="text-slate-500 mb-8 font-bold leading-relaxed text-sm">Ready to technical consult on your next project?</p>
                        <button
                            className="bg-primary text-white px-8 py-5 rounded-2xl font-black w-full hover:bg-primary-dark transition-all active:scale-95 shadow-[0_20px_40px_rgba(79,70,229,0.2)] uppercase tracking-widest text-xs"
                            onClick={(e) => scrollToSection(e, '#contact')}
                        >
                            Start Project
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-black uppercase tracking-[0.2em]">
                    <p>© {new Date().getFullYear()} {companyInfo.name} {companyInfo.nameSecondary}. All Rights Reserved.</p>
                    <div className="flex space-x-10 mt-6 md:mt-0">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
