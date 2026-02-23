// src/components/sections/OurProcess.jsx
import React from 'react';
import { Section, SectionTitle } from '../common/Section';
import { processSteps } from '../../data/process';
import * as LucideIcons from 'lucide-react';
import { scrollToSection } from '../../utils/navigation';

const OurProcess = () => {
    return (
        <Section id="process" className="bg-[#020617] overflow-hidden">
            <SectionTitle
                subtitle="The Methodology"
                title="Our Process."
                centered
            />

            <div className="relative mt-20 md:mt-32 max-w-5xl mx-auto px-4">
                {/* the vertical timeline line */}
                <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden sm:block" />

                <div className="space-y-16 md:space-y-24">
                    {processSteps.map((step, idx) => {
                        const IconComponent = LucideIcons[step.icon] || LucideIcons.Construction;
                        const isEven = idx % 2 === 0;

                        return (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* node on the line */}
                                <div className="absolute left-0 sm:left-[39px] md:left-1/2 w-12 h-12 bg-[#020617] border-2 border-primary/30 rounded-full flex items-center justify-center -translate-x-1/2 z-20 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-500 hidden sm:flex">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                </div>

                                {/* content card */}
                                <div className={`w-full md:w-[45%] pl-12 sm:pl-20 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-white/5 shadow-2xl backdrop-blur-xl group-hover:bg-white/10 transition-all duration-700">
                                        <div className={`flex items-center space-x-6 mb-6 ${isEven ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/5 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-500">
                                                <IconComponent className="w-7 h-7" />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed font-bold text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* empty side for desktop staggered layout */}
                                <div className="hidden md:block w-[45%]" />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-32 p-8 md:p-16 bg-slate-900/50 border border-white/5 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-3xl shadow-primary/20 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-500" />

                <div className="relative z-10 text-center lg:text-left">
                    <h4 className="text-2xl md:text-4xl font-black mb-4 tracking-tight leading-none">Ready to start?</h4>
                    <p className="text-slate-400 text-base md:text-lg font-bold max-w-xl">Consult with our structural engineering team for your next major project.</p>
                </div>
                <button
                    className="relative z-10 bg-primary text-white px-10 py-5 md:px-12 md:py-6 rounded-2xl font-black hover:bg-white hover:text-primary transition-all active:scale-95 whitespace-nowrap shadow-2xl shadow-primary/40 uppercase tracking-widest text-xs"
                    onClick={(e) => scrollToSection(e, '#contact')}
                >
                    Initiate Consultation
                </button>
            </div>
        </Section>
    );
};

export default OurProcess;
