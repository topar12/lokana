import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const MobileHero = () => {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-black px-5 pt-16">
            {/* Background - Simplified for Mobile */}
            <div className="absolute inset-0 z-0">
                <div className="section-grid-overlay absolute inset-0 opacity-30"></div>
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[60px]"></div>
            </div>

            <div className="relative z-10 flex w-full flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 backdrop-blur-md"
                >
                    <ShieldCheck className="h-3 w-3 text-primary" />
                    <span className="font-mono text-[10px] font-medium tracking-wider text-primary uppercase">Private Intelligence</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl font-bold leading-tight tracking-tight text-white mb-6"
                >
                    안전한 경계 안에서,<br />
                    <span className="bg-gradient-to-r from-primary to-accent-cool bg-clip-text text-transparent">지능은 확장됩니다</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10 max-w-sm text-base leading-relaxed text-text-secondary"
                >
                    보안이 전제된 강력한 온프레미스 AI.<br />
                    데이터가 가장 안전한 곳에서<br />
                    혁신의 도구가 됩니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex w-full flex-col gap-3"
                >
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-black active:scale-95 transition-transform"
                    >
                        도입 상담 요청
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default MobileHero;
