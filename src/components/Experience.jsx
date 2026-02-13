import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import talentSearchImg from '../assets/projects/talent_search.png';
import inventoryImg from '../assets/projects/inventory.png';

const experiences = [
    {
        company: "Bosch Global Software Technologies",
        role: "Associate Search",
        title: "AI-Enabled Associate Search & Job Posting Management System",
        period: "1 Year Experience",
        tech: ["React.js", "Node.js", "Azure", "GenAI", "NLP"],
        image: talentSearchImg,
        description: "Built automated Excel ingestion pipelines, NLP-based skill extraction, fuzzy matching and LLM-powered semantic ranking to deliver context-aware talent recommendations.",
        metrics: ["+35% Match Relevance", "-45% False Positives", "+40% Productivity"]
    },
    {
        company: "Bosch Global Software Technologies",
        role: "Inventory Management",
        title: "Inventory Management System",
        period: "Enterprise Project",
        tech: ["React.js", "FastAPI", "Azure"],
        image: inventoryImg,
        description: "Developed a full-stack inventory system with RESTful APIs, real-time dashboards and automated reporting, deployed securely through Azure pipelines.",
        metrics: ["Real-time Dashboards", "Automated Reporting", "Secure Operations"]
    }
];

const ExpCard = ({ exp, idx }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="group relative bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col"
    >
        <div className="relative h-[450px] overflow-hidden">
            <img
                src={exp.image}
                alt={exp.role}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>

            <div className="absolute top-8 right-8">
                <div className="p-5 bg-white text-black rounded-full hover:scale-110 transition-transform flex items-center justify-center cursor-pointer">
                    <ArrowUpRight size={24} />
                </div>
            </div>

            <div className="absolute bottom-6 left-10 right-10 flex justify-between items-end">
                <div className="max-w-4xl">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white/90 tracking-tighter uppercase leading-tight drop-shadow-xl">
                        {exp.title}
                    </h3>
                </div>
            </div>
        </div>

        <div className="px-10 pb-10 pt-6">
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">{exp.description}</p>

            <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                <div className="flex flex-wrap gap-3">
                    {exp.tech.map(t => (
                        <span key={t} className="px-5 py-3 bg-white/5 text-xs font-black uppercase tracking-widest text-slate-300 rounded-2xl border border-white/5">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4">
                    {exp.metrics.map((m, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">{m}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <div id="experience" className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-16 mb-24">
                {experiences.map((exp, idx) => (
                    <ExpCard key={idx} exp={exp} idx={idx} />
                ))}
            </div>

            {/* Scalability Badge */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-yellow-500 rounded-[3rem] flex flex-col items-center justify-center text-center group"
            >
                <Briefcase size={48} className="text-black mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl md:text-3xl font-black text-black leading-tight uppercase tracking-tighter">Scalable Systems. Intelligent Products. Absolute Precision.</h4>
            </motion.div>
        </div>
    );
};

export default Experience;
