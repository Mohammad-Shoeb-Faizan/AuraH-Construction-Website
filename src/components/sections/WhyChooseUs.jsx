// src/components/sections/WhyChooseUs.jsx
import React from 'react';
import { Section, SectionTitle } from '../common/Section';
import { companyInfo } from '../../data/company';
import { ShieldCheck, Zap, Users, Trophy } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Safety First",
            desc: "Impeccable safety record across all large-scale construction sites.",
            icon: <ShieldCheck className="w-10 h-10 text-primary" />
        },
        {
            title: "Execution Speed",
            desc: "Optimized workflows reducing timelines by 30% without quality loss.",
            icon: <Zap className="w-10 h-10 text-primary" />
        },
        {
            title: "Global Expertise",
            desc: "Highly qualified engineers with international project experience.",
            icon: <Users className="w-10 h-10 text-primary" />
        },
        {
            title: "Award Winning",
            desc: "Recognized for structural excellence and heritage preservation.",
            icon: <Trophy className="w-10 h-10 text-primary" />
        }
    ];

    return (
        <Section id="why-choose-us" className="bg-[#020617]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                    <SectionTitle
                        subtitle="The Competitive Edge"
                        title="Why Choose Us."
                    />
                    <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
                        We pride ourselves on a culture of precision and accountability. Our engineering team brings world-class standards to every residential and industrial build.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {reasons.map((item, idx) => (
                            <div key={idx} className="flex flex-col space-y-6 group">
                                <div className="p-4 bg-white/5 border border-white/5 rounded-2xl self-start group-hover:bg-primary/20 group-hover:border-primary/20 transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-black text-white tracking-tighter">{item.title}</h4>
                                <p className="text-slate-400 leading-relaxed font-bold text-sm uppercase tracking-wider">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-white/5 shadow-3xl backdrop-blur-3xl">
                    {/* bg texture */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="grid grid-cols-6 h-full w-full">
                            {[...Array(24)].map((_, i) => (
                                <div key={i} className="border-r border-b border-primary/10" />
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20">
                        {companyInfo.stats.map((stat, idx) => (
                            <div key={idx} className="text-center sm:text-left group">
                                <p className="text-5xl md:text-6xl font-heading font-black text-primary mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500 shadow-primary/20 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">{stat.value}</p>
                                <p className="text-white font-black uppercase tracking-[0.3em] text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 relative z-10 pt-16 border-t border-white/10 flex flex-col items-center sm:items-start text-center sm:text-left">
                        <p className="text-slate-300 font-black text-2xl leading-snug tracking-tighter max-w-2xl italic">
                            "Delivering structural sophistication that defines modern urban landscapes with reliability."
                        </p>
                        <div className="mt-10 flex items-center space-x-6">
                            <div className="w-12 h-px bg-primary" />
                            <p className="text-primary font-black uppercase tracking-[0.2em] text-xs">Structural Engineering Review</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;
