// src/components/sections/CompanyOverview.jsx
import React from 'react';
import { Section, SectionTitle } from '../common/Section';
import { CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../../data/company';

const CompanyOverview = () => {
    const highlights = [
        "Uncompromising Safety Standards",
        "Sustainable Building Practices",
        "Innovative Structural Technology",
        "Client-First Project Management"
    ];

    return (
        <Section id="company">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                            alt="Engineers at work"
                            className="w-full h-[350px] md:h-[500px] object-cover"
                        />
                    </div>
                    {/* decorative border thing */}
                    <div className="absolute -top-6 -left-6 w-full h-full border-4 border-primary/20 rounded-2xl -z-0" />
                    <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-primary p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(139,92,246,0.3)] z-20 border border-white/10 backdrop-blur-xl">
                        <p className="text-white font-black text-4xl md:text-6xl mb-1 md:mb-2 tracking-tighter">25</p>
                        <p className="text-white/80 font-black leading-tight uppercase tracking-[0.2em] text-xs max-w-[120px] md:max-w-none">
                            Years of Excellence in Engineering
                        </p>
                    </div>
                </div>

                <div className="md:pl-6 lg:pl-8">
                    <SectionTitle
                        subtitle={companyInfo.about.subtitle}
                        title={companyInfo.about.title}
                    />
                    <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                        {companyInfo.about.description}
                    </p>

                    <div className="space-y-4 mb-10">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-4 group">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white" />
                                </div>
                                <span className="text-lg font-black text-slate-100 tracking-tight">{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-slate-100 text-xl font-black border-l-8 border-primary pl-8 py-4 mb-10 tracking-tight leading-snug">
                        "{companyInfo.about.quote}"
                    </p>

                    <div className="flex items-center space-x-6">
                        <img
                            src={companyInfo.about.founder.image}
                            alt={companyInfo.about.founder.name}
                            className="w-16 h-16 rounded-full object-cover grayscale"
                        />
                        <div>
                            <p className="text-lg font-bold text-primary leading-none mb-1">{companyInfo.about.founder.name}</p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{companyInfo.about.founder.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CompanyOverview;
