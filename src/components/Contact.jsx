import { useLanguage } from "../contexts/LanguageContext";
import config from "../config";
import configAr from "../config-ar";

export default function Contact() {
    const { language, t } = useLanguage();
    const currentConfig = language === 'ar' ? configAr : config;

    const whatsappUrl = `https://wa.me/${currentConfig.whatsappNumber}?text=${encodeURIComponent(
        currentConfig.whatsappMessage.replace("{shopName}", currentConfig.shopName)
    )}`;

    return (
        <section id="contact" className="section-padding bg-dark-surface relative">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
                        {t('getInTouch')}
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold mt-3 mb-4">
                        <span className="text-gradient">{t('contact')}</span> {language === 'ar' ? 'بنا' : 'Us'}
                    </h2>
                    <div className="w-16 h-0.5 bg-primary mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Info Side */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                ),
                                title: language === 'ar' ? 'زرنا' : 'Visit Us',
                                content: `${currentConfig.address}, ${currentConfig.city}, ${currentConfig.country}`,
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                ),
                                title: language === 'ar' ? 'اتصل ' : 'Call Us',
                                content: currentConfig.phone,
                                href: `tel:${currentConfig.phone.replace(/\s/g, "")}`,
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                ),
                                title: "WhatsApp",
                                content: language === 'ar' ? 'رسلنا رسالة مباشرة' : 'Message us directly',
                                href: whatsappUrl,
                                external: true,
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-5 p-6 bg-dark-card rounded-2xl border border-dark-border hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.external ? "_blank" : undefined}
                                            rel={item.external ? "noopener noreferrer" : undefined}
                                            className="text-muted hover:text-primary transition-colors"
                                        >
                                            {item.content}
                                        </a>
                                    ) : (
                                        <p className="text-muted">{item.content}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            {currentConfig.social.instagram && (
                                <a
                                    href={currentConfig.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-dark-border bg-dark-card flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                            )}
                            {currentConfig.social.tiktok && (
                                <a
                                    href={currentConfig.social.tiktok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-dark-border bg-dark-card flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300"
                                    aria-label="TikTok"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.43V13a8.28 8.28 0 005.58 2.17V11.7a4.79 4.79 0 01-3.77-1.85V6.69z" />
                                    </svg>
                                </a>
                            )}
                            {currentConfig.social.facebook && (
                                <a
                                    href={currentConfig.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-dark-border bg-dark-card flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            )}
                            {currentConfig.social.snapchat && (
                                <a
                                    href={currentConfig.social.snapchat}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-dark-border bg-dark-card flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300"
                                    aria-label="Snapchat"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.949-.263.156-.077.346-.12.508-.12.266 0 .487.09.652.27.163.18.223.399.179.656-.054.35-.396.585-.758.727a3.258 3.258 0 01-.327.116c-.12.04-.236.08-.343.131-.349.166-.468.393-.481.592.13.257.36.456.645.592.015.007.034.013.053.019a4.153 4.153 0 011.282.697c.378.318.548.68.505 1.074-.072.65-.844 1.044-2.362 1.204-.253.028-.405.122-.473.26-.138.282-.308.62-.478.961a.66.66 0 01-.581.373c-.022 0-.042 0-.064-.003a1.863 1.863 0 01-.266-.039 5.37 5.37 0 00-1.24-.159c-.283 0-.546.018-.802.053-.578.08-1.058.357-1.568.651-.648.373-1.315.758-2.262.758-.03 0-.061 0-.091-.001-.031.001-.061.001-.091.001-.948 0-1.615-.385-2.263-.758-.51-.294-.99-.572-1.568-.651a7.317 7.317 0 00-.802-.053c-.392 0-.809.049-1.24.159-.076.018-.157.031-.265.039a.66.66 0 01-.645-.376c-.17-.341-.34-.679-.478-.961-.068-.138-.22-.232-.473-.26-1.518-.16-2.29-.554-2.362-1.204-.043-.394.127-.756.505-1.074a4.14 4.14 0 011.282-.697l.053-.019c.285-.136.515-.335.645-.592-.013-.199-.132-.426-.481-.592a3.543 3.543 0 00-.343-.131 3.258 3.258 0 01-.327-.116c-.362-.142-.704-.377-.758-.727-.044-.257.016-.476.179-.656.165-.18.386-.27.652-.27.162 0 .352.043.508.12.29.143.649.247.949.263.198 0 .326-.045.401-.09a34.044 34.044 0 01-.033-.57c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="rounded-2xl overflow-hidden border border-dark-border h-[400px] lg:h-auto">
                        <iframe
                            src={currentConfig.googleMapsEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px", filter: "invert(90%) hue-rotate(180deg)" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${currentConfig.shopName} ${language === 'ar' ? 'الموقع' : 'location'}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
