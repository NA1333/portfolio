import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, TrendingUp, Cpu, ArrowUpRight, ExternalLink } from 'lucide-react';
import forecasting1Img from '../assets/projects/forecasting_1.png';
import ragImg from '../assets/projects/rag_1.png';

const projects = {
    personal: [
        {
            title: "Demand Forecasting",
            subtitle: "Sales Optimization System",
            tech: ["Python", "ARIMA", "Streamlit"],
            description: "Solved critical stock-out and over-inventory issues by implementing a time-series model that predicts seasonal demand with high accuracy, reducing inventory waste by up to 25%.",
            icon: <TrendingUp className="text-yellow-500" />,
            image: forecasting1Img,
            link: "https://my-demand-forecasting-app.streamlit.app/"
        },
        {
            title: "RAG System",
            subtitle: "Retrieval-Augmented Generation",
            tech: ["Python", "LangChain", "Vector DB", "LLM"],
            description: "Eliminated LLM hallucinations in document processing by building a RAG pipeline that enforces factual grounding through dense vector retrieval and semantic chunking.",
            icon: <Database className="text-cyan-500" />,
            image: ragImg
        }
    ],
    openSource: {
        title: "Hive Platform",
        description: "Contributed to scalable AI workflow systems and modular backend architecture through open collaboration.",
        link: "https://github.com/adenhq/hive",
        tech: ["AI Workflows", "Modular Architecture"]
    }
};

const ProjectCard = ({ p, idx }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="group relative bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col"
    >
        <div className="relative h-[450px] overflow-hidden">
            <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>

            <div className="absolute top-8 right-8">
                <a
                    href={p.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-white text-black rounded-full hover:scale-110 transition-transform flex items-center justify-center"
                >
                    <ArrowUpRight size={24} />
                </a>
            </div>

            <div className="absolute bottom-6 left-10 right-10 flex justify-between items-end">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-2">{p.title}</h3>
                <p className="text-sm md:text-base text-slate-400 font-bold uppercase tracking-[0.2em]">{p.subtitle}</p>
            </div>
        </div>

        <div className="px-10 pb-10 pt-6">
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">{p.description}</p>
            <div className="flex flex-wrap gap-3">
                {p.tech.map(t => (
                    <span key={t} className="px-5 py-3 bg-white/5 text-xs font-black uppercase tracking-widest text-slate-300 rounded-2xl border border-white/5">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <div id="projects" className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col gap-16 mb-32">
                {projects.personal.map((p, idx) => (
                    <ProjectCard key={idx} p={p} idx={idx} />
                ))}
            </div>

            <div className="">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-16 bg-[#0a0a0a] rounded-[3.5rem] border border-yellow-500/20 relative overflow-hidden group"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl text-left">
                            <div className="inline-flex items-center gap-3 text-yellow-500 font-black mb-6 uppercase tracking-[0.4em] text-xs">
                                <Code2 size={24} />
                                Open Source
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">{projects.openSource.title}</h3>
                            <p className="text-xl text-slate-400 mb-10 leading-relaxed italic border-l-4 border-white/10 pl-8">
                                "{projects.openSource.description}"
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {projects.openSource.tech.map(t => (
                                    <span key={t} className="px-6 py-3 bg-white/5 rounded-2xl text-[10px] font-black border border-white/10 uppercase tracking-widest">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <motion.a
                            href={projects.openSource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto px-12 py-7 bg-white text-black font-black rounded-[2.5rem] flex items-center justify-center gap-4 text-xl shadow-2xl hover:bg-yellow-500 transition-colors"
                        >
                            Explore Source <ExternalLink size={24} />
                        </motion.a>
                    </div>

                    <div className="absolute -bottom-20 -right-20 opacity-5 grayscale group-hover:scale-110 transition-transform duration-1000">
                        <Cpu size={500} />
                    </div>
                </motion.div>
            </div>

            {/* Scalability Badge - Enhanced Design */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-16 md:p-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-[3.5rem] mt-24 overflow-hidden group shadow-2xl shadow-yellow-500/20"
            >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-br-[3rem] blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-black/10 rounded-tl-[3rem] blur-2xl"></div>

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 border-4 border-black rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-black rounded-full group-hover:scale-150 transition-transform duration-1000 delay-100"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mb-8 p-6 bg-black/10 rounded-3xl backdrop-blur-sm"
                    >
                        <Database size={56} className="text-black" />
                    </motion.div>

                    <h4 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-[1.1] uppercase tracking-tighter max-w-4xl">
                        Scalable Systems.{' '}
                        <span className="inline-block bg-black text-yellow-500 px-6 py-2 rounded-2xl mx-2 group-hover:scale-105 transition-transform">
                            Intelligent Products.
                        </span>{' '}
                        Absolute Precision.
                    </h4>

                    {/* Decorative underline */}
                    <div className="mt-8 flex gap-2">
                        <div className="w-16 h-1.5 bg-black rounded-full"></div>
                        <div className="w-8 h-1.5 bg-black/50 rounded-full"></div>
                        <div className="w-4 h-1.5 bg-black/30 rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
