import { useLanguage } from "../contexts/LanguageContext";
import config from "../config";
import configAr from "../config-ar";

export default function About() {
    const { language, t } = useLanguage();
    const currentConfig = language === 'ar' ? configAr : config;
    return (
        <section id="about" className="section-padding bg-dark relative">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                            <img
                                src={currentConfig.gallery[1]?.url || currentConfig.gallery[0]?.url}
                                alt={currentConfig.shopName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-4 sm:-right-6 glass rounded-2xl p-6 shadow-xl">
                            <div className="text-center">
                                <span className="text-3xl font-bold text-gradient">5+</span>
                                <p className="text-xs text-muted uppercase tracking-wider mt-1">
                                    {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                                </p>
                            </div>
                        </div>

                        {/* Decorative border */}
                        <div className="absolute -inset-3 border border-primary/10 rounded-2xl -z-10" />
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
                            {t('ourStory')}
                        </span>
                        <h2 className="font-serif text-4xl sm:text-5xl font-bold mt-3 mb-6">
                            {t('aboutUs')} <span className="text-gradient">{currentConfig.shopName}</span>
                        </h2>

                        <p className="text-muted leading-relaxed mb-8 text-lg">
                            {currentConfig.description}
                        </p>

                        {/* Working Hours */}
                        <div className="mb-8">
                            <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {t('workingHours')}
                            </h3>
                            <div className="space-y-2">
                                {currentConfig.hours.map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between py-2 border-b border-dark-border last:border-0"
                                    >
                                        <span className="text-light text-sm font-medium">{h.day}</span>
                                        <span className="text-muted text-sm">{h.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: "1000+", label: language === 'ar' ? 'عملاء سعداء' : 'Happy Clients' },
                                { value: "6+", label: language === 'ar' ? 'حلاقون خبراء' : 'Expert Barbers' },
                                { value: "4.9", label: language === 'ar' ? 'تقييم جوجل' : 'Google Rating' },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="text-center p-4 bg-dark-card rounded-xl border border-dark-border"
                                >
                                    <span className="text-xl font-bold text-gradient">{stat.value}</span>
                                    <p className="text-xs text-muted mt-1 uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
