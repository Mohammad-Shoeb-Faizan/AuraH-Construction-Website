// src/components/sections/CompanySnapshot.jsx
import React from 'react';
import { Section } from '../common/Section';
import { companyInfo } from '../../data/company';

const CompanySnapshot = () => {
    return (
        <Section id="snapshot" className="bg-slate-900 border-y border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {companyInfo.stats.map((stat, idx) => (
                    <div key={idx} className="text-center group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500">
                        <p className="text-5xl md:text-6xl font-heading font-black text-primary mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500 shadow-primary/20 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                            {stat.value}
                        </p>
                        <p className="text-white font-black uppercase tracking-[0.3em] text-xs">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default CompanySnapshot;
