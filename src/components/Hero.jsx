import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#000000] overflow-hidden">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/5 blur-[150px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-w-5xl"
            >
                <div className="flex flex-col items-center mb-10 overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter mb-8"
                    >
                        MD NABEEL <br />
                        <span className="text-white/20 hover:text-yellow-500/30 transition-colors duration-700">CHISHTY</span>
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <p className="text-lg md:text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        Full Stack Developer building <span className="text-white">Scalable AI Systems</span> and
                        <span className="text-white"> Production-Grade</span> Cloud Applications.
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        <motion.a
                            href="#experience"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-3 px-10 py-5 bg-yellow-500 text-black font-black text-lg rounded-2xl transition-all shadow-xl hover:shadow-yellow-500/20"
                        >
                            Explore My Work
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <div className="flex items-center gap-4 text-slate-400">
                            <div className="p-px w-12 bg-slate-800"></div>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-lg md:text-xl font-black uppercase tracking-[0.3em] pl-3 border-l-4 border-yellow-500 text-yellow-500">1 Year Experience</span>
                                <span className="text-lg md:text-xl font-black uppercase tracking-[0.3em] pl-3 border-l-4 border-slate-700 opacity-90">Bosch Global Software Technologies</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Scroll</span>
            </motion.div>
        </div>
    );
};

export default Hero;
