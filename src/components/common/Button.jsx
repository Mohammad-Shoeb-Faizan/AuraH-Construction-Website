// src/components/common/Button.jsx
import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center transition-all duration-700 font-black active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-xs';

    const variants = {
        primary: 'bg-primary hover:bg-primary-light text-slate-900 px-10 py-4 rounded-2xl shadow-[0_20px_40px_rgba(139,92,246,0.3)] hover:shadow-[0_30px_60px_rgba(139,92,246,0.4)] hover:-translate-y-1',
        secondary: 'bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-2xl shadow-2xl',
        outline: 'border border-white/10 text-white hover:bg-white/5 px-10 py-4 rounded-2xl backdrop-blur-md',
        ghost: 'text-primary hover:bg-primary/10 px-6 py-3 rounded-xl',
        accentGhost: 'text-white hover:bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
