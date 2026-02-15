import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Tech from './components/sections/Tech';
import Vision from './components/sections/Vision';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';

function App() {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-brand-black text-text-primary font-sans selection:bg-primary selection:text-black">
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute right-[-8rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[160px]"></div>
                <div className="absolute bottom-[-10rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-accent-cool/10 blur-[170px]"></div>
            </div>

            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <Problem />
                    <Solution />
                    <Tech />
                    <Vision />
                    <Team />
                    <Contact />
                </main>

                <footer className="border-t border-white/10 bg-black/60 py-10 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="relative h-8 w-8">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent-warm to-accent-cool clip-prism"></div>
                                </div>
                                <div>
                                    <p className="font-mono text-lg font-bold tracking-tight text-white">LOKANA</p>
                                    <p className="text-xs text-text-muted">보안이 전제인 산업을 위한 온프레미스 AI</p>
                                </div>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-text-secondary transition-all hover:scale-105 hover:border-primary/30 hover:text-white">온프레미스</span>
                                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-text-secondary transition-all hover:scale-105 hover:border-primary/30 hover:text-white">폐쇄망 대응</span>
                                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-text-secondary transition-all hover:scale-105 hover:border-primary/30 hover:text-white">도메인 특화</span>
                            </div>
                        </div>

                        <div className="md:text-right">
                            <p className="text-xs text-text-secondary">
                                &copy; 2026 LOKANA. All rights reserved. <br className="md:hidden" />
                                <span className="hidden md:inline"> | </span> Contact: contact@lokana.ai
                            </p>
                            <p className="mt-2 text-[11px] text-text-muted">데이터 주권 위에 세운 AI, 현장에서 가치를 증명합니다.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
