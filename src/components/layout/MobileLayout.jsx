import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileHero from '../mobile/MobileHero';
import MobileSections from '../mobile/MobileSections';
import Contact from '../sections/Contact';
// Reusing Contact for now as it's likely responsive enough, or will create MobileContact later

const MobileLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black pb-20">
            {/* Simple Mobile Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-black/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-2">
                    <img src="/src/assets/lokana_symbol.svg" alt="LOKANA" className="h-8 w-8" />
                    <img src="/src/assets/lokana_text_only.svg" alt="LOKANA" className="h-5 w-auto" />
                </div>
                {/* Hamburger (Functionality to be expanded) */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </header>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black pt-24 px-6">
                    <nav className="flex flex-col gap-6 text-xl font-medium text-white/80">
                        <a href="#" className="border-b border-white/10 pb-4">Home</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="border-b border-white/10 pb-4 text-primary">Contact</a>
                    </nav>
                </div>
            )}

            <main className="pt-16">
                <MobileHero />
                <MobileSections />
                <div className="px-5 py-12 text-center border-t border-white/10">
                    {/* Temporarily reusing Contact, we might want a simplified version later */}
                    <div id="contact">
                        <Contact />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MobileLayout;
