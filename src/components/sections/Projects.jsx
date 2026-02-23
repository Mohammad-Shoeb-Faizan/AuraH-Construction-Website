// src/components/sections/Projects.jsx
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Section, SectionTitle } from '../common/Section';
import { projects } from '../../data/projects';
import Button from '../common/Button';

const ProjectCard = ({ project }) => (
    <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/5 aspect-[4/5] md:aspect-square">
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-10 flex flex-col justify-end">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-black text-white bg-primary px-5 py-2 rounded-full uppercase tracking-widest mb-4 inline-block backdrop-blur-md border border-white/10 shadow-lg">
                    {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tighter leading-none">{project.title}</h3>
                <div className="flex items-center text-white space-x-2 mb-6">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-xs font-black uppercase tracking-widest">{project.location}</span>
                </div>
                <Button
                    className="w-full py-5 text-sm font-black uppercase tracking-widest bg-white text-slate-950 border-none hover:bg-primary hover:text-white opacity-0 md:opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 shadow-2xl"
                >
                    View Detail
                </Button>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Residential', 'Commercial', 'Infrastructure'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <Section id="portfolio" className="bg-[#020617]">
            <SectionTitle
                subtitle="The Portfolio"
                title="Masterpiece Archive."
                centered
            />

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border ${filter === cat
                            ? 'bg-primary text-slate-950 border-primary shadow-lg shadow-primary/20'
                            : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>

            <div className="mt-24 text-center">
                <p className="text-slate-400 font-bold mb-8 italic">We translate architectural vision into concrete reality.</p>
                <Button
                    variant="primary"
                    className="px-12 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-primary/20"
                >
                    View Project Archive
                </Button>
            </div>
        </Section>
    );
};

export default Projects;
