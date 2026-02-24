import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import config from "../config";
import configAr from "../config-ar";
import logo from "../assets/Barber's town shop logo.png";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, t, toggleLanguage } = useLanguage();

    const currentConfig = language === 'ar' ? configAr : config;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: t('services'), href: "#services" },
        { label: t('gallery'), href: "#gallery" },
        { label: t('about'), href: "#about" },
        { label: t('contact'), href: "#contact" },
    ];

    const whatsappUrl = `https://wa.me/${currentConfig.whatsappNumber}?text=${encodeURIComponent(
        currentConfig.whatsappMessage.replace("{shopName}", currentConfig.shopName)
    )}`;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass py-3 shadow-lg shadow-black/30" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <img
                        src={logo}
                        alt={currentConfig.shopName}
                        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10"
                    />
                    <span className="font-serif text-lg sm:text-xl font-bold text-gradient tracking-wide">
                        {currentConfig.shopName}
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-muted hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 px-5 py-2.5 bg-primary text-dark font-semibold text-sm rounded-full uppercase tracking-wider hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
                    >
                        {t('bookNow')}
                    </a>

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="ml-4 px-3 py-2 border border-primary/40 text-primary font-semibold text-sm rounded-full hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
                        aria-label="Toggle Language"
                    >
                        <span className="text-base font-bold">
                            {language === 'en' ? 'En' : 'Ar'}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    {/* Language Toggle - Mobile */}
                    <button
                        onClick={toggleLanguage}
                        className="px-3 py-2 border border-primary/40 text-primary font-semibold text-sm rounded-full hover:bg-primary/10 transition-all duration-300"
                        aria-label="Toggle Language"
                    >
                        <span className="text-base font-bold">
                            {language === 'en' ? 'En' : 'Ar'}
                        </span>
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex flex-col gap-1.5 w-7 cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        <span
                            className={`block h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden glass overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 mt-2" : "max-h-0"
                    }`}
            >
                <div className="px-6 py-4 flex flex-col gap-4">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm uppercase tracking-widest text-muted hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-primary text-dark font-semibold text-sm rounded-full uppercase tracking-wider text-center hover:bg-primary-light transition-all duration-300"
                    >
                        {t('bookNow')}
                    </a>
                </div>
            </div>
        </nav>
    );
}
