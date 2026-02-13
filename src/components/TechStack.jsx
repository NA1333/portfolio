import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
    {
        category: "Full Stack",
        items: [
            { name: "React.js", icon: "⚛️" },
            { name: "Node.js", icon: "N" },
            { name: "FastAPI", icon: "⚡" },
            { name: "REST APIs", icon: "🔗" }
        ]
    },
    {
        category: "AI / GenAI",
        items: [
            { name: "LangChain", icon: "🦜" },
            { name: "RAG", icon: "🔍" },
            { name: "NLP", icon: "🧠" },
            { name: "Machine Learning", icon: "🤖" }
        ]
    },
    {
        category: "Cloud",
        items: [
            { name: "Microsoft Azure", icon: "☁️" }
        ]
    },
    {
        category: "Database",
        items: [
            { name: "MySQL", icon: "🐬" }
        ]
    },
    {
        category: "DevOps / Tools",
        items: [
            { name: "Docker", icon: "🐳" },
            { name: "CI/CD", icon: "🔄" },
            { name: "Git", icon: "🌿" }
        ]
    },
    {
        category: "Languages",
        items: [
            { name: "Python", icon: "🐍" },
            { name: "JavaScript", icon: "JS" }
        ]
    }
];



const TechCard = ({ name, icon }) => (
    <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        className="flex items-center gap-4 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-white/10 w-full mb-4 shadow-yellow-500/5 group hover:border-yellow-500/30 transition-colors"
    >
        <div className="w-12 h-12 flex items-center justify-center font-black text-2xl rounded-xl bg-slate-100 shrink-0 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div className="flex flex-col min-w-0">
            <span className="text-base md:text-lg font-black text-slate-900 leading-tight tracking-tight break-words">{name}</span>
        </div>
    </motion.div>
);

const TechStack = () => {
    return (
        <div className="py-24 px-6 md:px-12 bg-[#050505] text-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col mb-20 items-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 text-center">
                        My Tech <span className="text-yellow-500 glow-text">Stacks</span>
                    </h2>
                    <div className="w-32 h-2 bg-yellow-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-start">
                    {techStack.map((cat, idx) => (
                        <div key={idx} className="flex flex-col">
                            <h3 className="text-left text-base font-black mb-8 text-white/90 uppercase tracking-[0.3em] pl-3 border-l-4 border-yellow-500 h-5 flex items-center">
                                {cat.category}
                            </h3>
                            <div className="flex flex-col">
                                {cat.items.map((item, i) => (
                                    <TechCard key={i} name={item.name} icon={item.icon} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default TechStack;
