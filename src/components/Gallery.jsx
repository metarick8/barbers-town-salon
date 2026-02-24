import { useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import config from "../config";
import configAr from "../config-ar";

export default function Gallery() {
    const scrollRef = useRef(null);
    const [lightbox, setLightbox] = useState(null);
    const { language } = useLanguage();

    const currentConfig = language === 'ar' ? configAr : config;

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 340;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="gallery" className="section-padding bg-dark-surface relative overflow-hidden">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
                            {language === 'ar' ? 'أعمالنا' : 'Our Work'}
                        </span>
                        <h2 className="font-serif text-4xl sm:text-5xl font-bold mt-3">
                            <span className="text-gradient">{language === 'ar' ? 'معرض الصور' : 'Gallery'}</span>
                        </h2>
                    </div>

                    {/* Scroll Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-dark-border hover:border-primary bg-dark-card hover:bg-primary/10 transition-all duration-300 flex items-center justify-center group cursor-pointer"
                            aria-label="Scroll left"
                        >
                            <svg className="w-5 h-5 text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-dark-border hover:border-primary bg-dark-card hover:bg-primary/10 transition-all duration-300 flex items-center justify-center group cursor-pointer"
                            aria-label="Scroll right"
                        >
                            <svg className="w-5 h-5 text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Gallery */}
                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
                >
                    {currentConfig.gallery.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[300px] sm:w-[340px] snap-center cursor-pointer group relative rounded-2xl overflow-hidden"
                            onClick={() => setLightbox(index)}
                        >
                            {/* Image */}
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <div>
                                    <p className="text-white font-medium text-sm">{image.alt}</p>
                                    <p className="text-primary text-xs mt-1 uppercase tracking-wider">{language === 'ar' ? 'عرض الصورة' : 'View Photo'}</p>
                                </div>
                            </div>

                            {/* Gold border on hover */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/40 transition-colors duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Scroll hint on mobile */}
                <div className="flex items-center justify-center gap-2 mt-6 sm:hidden">
                    <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span className="text-xs text-muted uppercase tracking-wider">{language === 'ar' ? 'اسحب للاستكشاف' : 'Swipe to explore'}</span>
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 w-12 h-12 rounded-full border border-dark-border bg-dark-card flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all cursor-pointer"
                        onClick={() => setLightbox(null)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-dark-border bg-dark-card flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightbox((prev) =>
                                prev > 0 ? prev - 1 : currentConfig.gallery.length - 1
                            );
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-dark-border bg-dark-card flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightbox((prev) =>
                                prev < currentConfig.gallery.length - 1 ? prev + 1 : 0
                            );
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image */}
                    <img
                        src={currentConfig.gallery[lightbox].url}
                        alt={currentConfig.gallery[lightbox].alt}
                        className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Caption */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                        <p className="text-white font-medium">{currentConfig.gallery[lightbox].alt}</p>
                        <p className="text-muted text-sm mt-1">
                            {lightbox + 1} / {currentConfig.gallery.length}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
