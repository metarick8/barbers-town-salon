import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import config from "../config";
import configAr from "../config-ar";

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { language, t } = useLanguage();

    const currentConfig = language === 'ar' ? configAr : config;

    const whatsappUrl = (serviceName) =>
        `https://wa.me/${currentConfig.whatsappNumber}?text=${encodeURIComponent(
            language === 'ar'
                ? `مرحبا! أود حجز ${serviceName} في ${currentConfig.shopName}.`
                : `Hello! I'd like to book a ${serviceName} at ${currentConfig.shopName}.`
        )}`;

    return (
        <section id="services" className="section-padding bg-dark relative">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
                        {language === 'ar' ? 'ما نقدمه' : 'What We Offer'}
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold mt-3 mb-4">
                        {language === 'ar' ? 'خدماتنا' : 'Our'} <span className="text-gradient">{t('services')}</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-primary mx-auto" />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentConfig.services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Icon + Price */}
                                <div className="flex items-start justify-between mb-6">
                                    <span
                                        className="text-4xl text-primary"
                                        dangerouslySetInnerHTML={{ __html: service.icon }}
                                    />
                                    <div className="text-right">
                                        <span className="text-2xl font-bold text-primary">
                                            {service.price}
                                        </span>
                                        <span className="text-sm text-muted ml-1">{service.currency}</span>
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                    {service.name}
                                </h3>

                                {/* Description */}
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Duration + Book */}
                                <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                                    <span className="text-xs text-muted uppercase tracking-wider flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {service.duration} {t('minutes')}
                                    </span>
                                    <a
                                        href={whatsappUrl(service.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary uppercase tracking-wider font-semibold hover:text-primary-light transition-colors flex items-center gap-1"
                                    >
                                        {t('bookNow')}
                                        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
