// src/components/sections/Services.jsx
import React from 'react';
import { Section, SectionTitle } from '../common/Section';
import { services } from '../../data/services';
import * as LucideIcons from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Services = () => {
    return (
        <Section id="services" className="bg-[#020617] overflow-hidden">
            <SectionTitle
                subtitle="Expertise"
                title="Professional Services."
                centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">
                {services.map((service, idx) => {
                    const IconComponent = LucideIcons[service.icon];
                    return (
                        <div
                            key={idx}
                            className={`group p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-700 shadow-2xl relative overflow-hidden ${idx === 0 || idx === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                        >
                            {/* hover glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/40 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 shadow-lg shadow-primary/5">
                                <IconComponent className="w-8 h-8 text-primary group-hover:text-slate-900 transition-colors duration-500" />
                            </div>
                            <h3 className="text-2xl font-black mb-6 text-white tracking-tight">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-bold text-sm mb-8">
                                {service.description}
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-primary group-hover:text-white transition-colors duration-500"
                            >
                                Get Details
                                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Services;
