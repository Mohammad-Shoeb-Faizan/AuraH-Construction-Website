// src/components/common/Section.jsx
import React from 'react';

export const Section = ({ id, children, className = '', containerClassName = '', dark = false }) => {
    return (
        <section
            id={id}
            className={`py-20 lg:py-32 ${dark ? 'bg-primary text-white' : 'bg-transparent'} ${className}`}
        >
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};

export const SectionTitle = ({ title, subtitle, centered = false, dark = false }) => {
    return (
        <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            {subtitle && (
                <p className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6 animate-in fade-in duration-700">
                    {subtitle}
                </p>
            )}
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tighter mb-8 animate-in slide-in-from-left duration-1000 ${centered ? 'mx-auto' : ''}`}>
                {title}
            </h2>
            <div className={`h-1.5 w-24 bg-primary rounded-full mb-12 animate-in slide-in-from-left duration-1000 delay-300 ${centered ? 'mx-auto' : ''}`} />
        </div>
    );
};
