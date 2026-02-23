// src/components/sections/Testimonials.jsx
import React from 'react';
import { Section, SectionTitle } from '../common/Section';
import { testimonials } from '../../data/testimonials';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <Section id="testimonials" className="bg-[#020617]">
            <SectionTitle
                subtitle="Social Proof"
                title="Client Feedback."
                centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                {testimonials.map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-12 rounded-[3rem] border border-white/5 relative group hover:bg-white/10 transition-all duration-700 shadow-2xl">
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                            <Quote className="text-white w-8 h-8" />
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed mb-10 font-medium italic">"{item.content}"</p>
                        <div className="flex items-center space-x-6">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-14 h-14 rounded-2xl object-cover grayscale"
                            />
                            <div>
                                <h4 className="text-white font-black tracking-tight">{item.name}</h4>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
