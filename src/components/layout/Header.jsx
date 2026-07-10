import { useState, useEffect } from 'react';
import { LuSun, LuMoon, LuMenu, LuX } from 'react-icons/lu';
import navLinks from '../../data/nav';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export default function Header({ isDark, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const activeId = useScrollSpy(sectionIds);

    // Header scroll effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'glass !rounded-none border-b border-slate-200/20 dark:border-slate-700/20 shadow-sm py-2'
                    : 'py-4'
                }`}
        >
            <nav className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="text-2xl font-extrabold"
                >
                    <span className="gradient-text">IR</span>
                    <span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => {
                        const id = link.href.replace('#', '');
                        return (
                            <li key={id}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`text-sm font-medium relative pb-1 transition-colors duration-300 ${activeId === id
                                            ? 'text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-sm'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-primary'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="text-xl cursor-pointer text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <LuSun size={20} /> : <LuMoon size={20} />}
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-2xl cursor-pointer text-slate-700 dark:text-slate-300"
                        aria-label="Open menu"
                    >
                        <LuMenu size={22} />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                )}

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 w-4/5 h-full bg-white dark:bg-slate-800 shadow-2xl z-50 p-10 pt-20 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-5 right-5 text-2xl cursor-pointer text-slate-700 dark:text-slate-300"
                        aria-label="Close menu"
                    >
                        <LuX size={24} />
                    </button>

                    <ul className="flex flex-col gap-6">
                        {navLinks.map((link) => {
                            const id = link.href.replace('#', '');
                            return (
                                <li key={id}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`text-lg font-medium ${activeId === id
                                                ? 'text-primary'
                                                : 'text-slate-700 dark:text-slate-300'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
