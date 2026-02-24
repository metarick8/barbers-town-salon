import { useLanguage } from "../contexts/LanguageContext";
import config from "../config";
import configAr from "../config-ar";
import logo from "../assets/Barber's town shop logo.png";

export default function Footer() {
    const { language, t } = useLanguage();
    const currentConfig = language === 'ar' ? configAr : config;
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark-card border-t border-dark-border">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src={logo}
                                alt={currentConfig.shopName}
                                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10"
                            />
                            <span className="font-serif text-xl font-bold text-gradient">
                                {currentConfig.shopName}
                            </span>
                        </div>
                        <p className="text-muted text-sm leading-relaxed">
                            {currentConfig.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg font-bold mb-4">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
                        <div className="flex flex-col gap-2">
                            {[t('services'), t('gallery'), t('about'), t('contact')].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-muted text-sm hover:text-primary transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-lg font-bold mb-4">{t('contact')}</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted">
                            <p>{currentConfig.address}, {currentConfig.city}</p>
                            <a href={`tel:${currentConfig.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                                {currentConfig.phone}
                            </a>
                            {currentConfig.email && (
                                <a href={`mailto:${currentConfig.email}`} className="hover:text-primary transition-colors">
                                    {currentConfig.email}
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                        © {year} {currentConfig.shopName}. {t('allRightsReserved')}.
                    </p>
                    <p className="text-xs text-muted/50">
                        {language === 'ar' ? 'صُنع ب✨ في أبو ظبي' : 'Crafted with ✨ in Abu Dhabi'}
                    </p>
                </div>
            </div>
        </footer>
    );
}
