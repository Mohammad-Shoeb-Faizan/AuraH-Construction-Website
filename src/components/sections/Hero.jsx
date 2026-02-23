// src/components/sections/Hero.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../utils/navigation';
import { companyInfo } from '../../data/company';
import Button from '../common/Button';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-48 overflow-hidden bg-[#020617]">
            {/* some fancy background stuff */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse delay-700" />
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
                        <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                        <span className="text-xs font-black text-slate-300 uppercase tracking-[0.3em]">Excellence through Innovation</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black text-white leading-[0.95] mb-8 animate-in slide-in-from-left duration-1000 tracking-tighter">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">The Future</span> <br />
                        Of Structures.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl animate-in slide-in-from-left duration-1000 delay-200 font-medium">
                        {companyInfo.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 animate-in slide-in-from-bottom duration-1000 delay-500">
                        <Button
                            variant="primary"
                            className="w-full sm:w-auto text-sm px-14 py-6 rounded-2xl group shadow-[0_30px_60px_rgba(139,92,246,0.3)] uppercase tracking-widest font-black"
                            onClick={(e) => scrollToSection(e, '#contact')}
                        >
                            Start Project
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto text-sm px-14 py-6 rounded-2xl border-white/10 text-white hover:bg-white/5 backdrop-blur-md uppercase tracking-widest font-black"
                            onClick={(e) => scrollToSection(e, '#portfolio')}
                        >
                            The Portfolio
                        </Button>
                    </div>

                    <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 animate-in fade-in duration-1000 delay-700">
                        {companyInfo.stats.slice(0, 3).map((stat, idx) => (
                            <div key={idx}>
                                <p className="text-3xl sm:text-4xl font-black text-white tracking-tighter mb-1">{stat.value}</p>
                                <p className="text-xs text-slate-400 font-black uppercase tracking-[0.2em]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
