// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { companyInfo } from '../../data/company';
import { scrollToSection } from '../../utils/navigation';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        scrollToSection(e, href);
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div
                        className="flex items-center space-x-3 cursor-pointer group"
                        onClick={(e) => handleLinkClick(e, '#home')}
                    >
                        <div className="bg-primary p-2 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-primary/20">
                            <Building2 className="w-6 h-6 text-slate-900" />
                        </div>
                        <span className="text-xl font-heading font-black tracking-tighter text-slate-50 uppercase">
                            {companyInfo.name}<span className="text-primary italic">{companyInfo.nameSecondary}</span>
                        </span>
                    </div>

                    {/* Nav Desktop */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-sm font-black text-slate-400 hover:text-primary transition-all uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            variant="secondary"
                            className="scale-90"
                            onClick={(e) => handleLinkClick(e, '#contact')}
                        >
                            Get a Quote
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-primary focus:outline-none transition-colors"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="px-4 pt-4 pb-12 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="block px-4 py-6 text-xl font-black text-white hover:text-primary border-b border-white/5 last:border-0 transition-colors uppercase tracking-[0.2em]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-8 px-4">
                            <Button
                                className="w-full py-6 rounded-2xl"
                                onClick={(e) => handleLinkClick(e, '#contact')}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
