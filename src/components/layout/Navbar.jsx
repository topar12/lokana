import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '솔루션', to: 'solution' },
        { name: '기술', to: 'tech' },
        { name: '비전', to: 'vision' },
        { name: '팀', to: 'team' },
    ];

    return (
        <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
            <div
                className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-5 transition-all duration-300 ${isScrolled
                    ? 'border-white/15 bg-black/70 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl'
                    : 'border-white/10 bg-black/35 backdrop-blur-lg'
                    }`}
            >
                <Link to="hero" smooth={true} duration={500} className="group flex cursor-pointer items-center gap-2.5">
                    <img src="/src/assets/lokana_symbol.svg" alt="LOKANA Symbol" className="h-9 w-9 md:h-10 md:w-10 transition-transform duration-500 group-hover:rotate-12" />
                    <img src="/src/assets/lokana_text_only.svg" alt="LOKANA" className="h-5 md:h-6 w-auto" />
                </Link>

                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={450}
                            className="cursor-pointer text-sm font-medium tracking-wide text-text-secondary transition-colors hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer rounded-lg border border-primary/20 bg-primary px-5 py-2.5 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_12px_28px_rgba(0,212,170,0.35)]"
                    >
                        도입 상담
                    </Link>
                </div>

                <button
                    type="button"
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass-panel absolute left-4 right-4 top-[4.75rem] rounded-2xl border-white/10 px-6 py-8 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-white transition-colors hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full rounded-lg bg-primary py-3 text-center font-bold text-black"
                            >
                                도입 상담
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
