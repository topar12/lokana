import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" className="relative flex min-h-[110vh] flex-col items-center justify-center overflow-hidden bg-black px-6 pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="section-grid-overlay absolute inset-0 opacity-30"></div>

                {/* Central Orb / Core */}
                <motion.div
                    style={{ y: y1, opacity }}
                    className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Secondary Orbs */}
                <motion.div
                    style={{ y: y2, opacity }}
                    className="absolute left-[20%] top-[30%] h-[300px] w-[300px] rounded-full bg-accent-cool/10 blur-[100px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Rotating Rings (Subtle tech feel) */}
                <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                    <motion.div
                        className="absolute inset-0 rounded-full border border-white/5"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute inset-40 rounded-full border border-white/5 border-dashed"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "out" }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md"
                >
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                    <span className="font-mono text-xs font-medium tracking-wider text-primary uppercase">Private Intelligence</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "out" }}
                    className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl md:leading-[1.1]"
                >
                    <span className="block text-white/90">안전한 경계 안에서,</span>
                    <span className="bg-gradient-to-r from-primary via-white to-accent-cool bg-clip-text text-transparent">지능은 무한히 확장됩니다</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "out" }}
                    className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl"
                >
                    보안이 전제된 강력한 온프레미스 AI.<br className="hidden sm:block" />
                    귀사의 데이터가 가장 안전한 곳에서 혁신의 도구가 됩니다.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "out" }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
                >
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-bold text-black transition-all hover:bg-primary-hover hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(0,212,170,0.5)] cursor-pointer"
                    >
                        <span className="relative z-10 transition-transform group-hover:-translate-x-1">도입 상담 요청</span>
                        <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                    </Link>

                    <Link
                        to="solution"
                        smooth={true}
                        duration={500}
                        className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 cursor-pointer"
                    >
                        <span>솔루션 구조 보기</span>
                        <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-medium tracking-widest text-white/30 uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
