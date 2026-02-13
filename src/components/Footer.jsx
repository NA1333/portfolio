import React from 'react';
import { Mail, Github, Linkedin, ArrowUp, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="py-32 px-6 md:px-12 bg-[#000000] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20 items-end mb-32">
                    <div>
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/40 mb-8 border-l-4 border-yellow-500 pl-4">Contact</h2>
                        <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter mb-12">
                            LET'S <br />
                            <span className="text-yellow-500">TALK</span>
                        </h3>
                        <p className="text-lg md:text-xl text-slate-400 font-medium max-w-md leading-relaxed">
                            Open for <span className="text-white">Scalable Full Stack Systems</span> &
                            <span className="text-white"> GenAI Products</span>.
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-12">
                        <div className="flex gap-4">
                            <a
                                href="mailto:chishtymdnabeel@gmail.com"
                                className="w-20 h-20 bg-white text-black rounded-3xl flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-2xl"
                            >
                                <Mail size={32} />
                            </a>
                            <a
                                href="https://github.com/dashboard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-20 h-20 bg-white/5 text-white rounded-3xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <Github size={32} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-nabeel-chishty-baa488223/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-20 h-20 bg-white/5 text-white rounded-3xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <Linkedin size={32} />
                            </a>
                        </div>


                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/5 gap-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                        © 2026 MD Nabeel Chishty — GenAI Full Stack Engineer
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-white/40 hover:text-yellow-500 transition-colors"
                    >
                        Back to Top
                        <div className="p-3 bg-white/5 rounded-full group-hover:bg-yellow-500 group-hover:text-black transition-all">
                            <ArrowUp size={16} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
