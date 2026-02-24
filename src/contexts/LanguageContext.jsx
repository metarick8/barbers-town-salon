import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    en: {
        // Navigation
        services: "Services",
        gallery: "Gallery",
        about: "About",
        contact: "Contact",
        bookNow: "Book Now",

        // Hero
        premiumGrooming: "Premium Grooming",
        bookViaWhatsApp: "Book via WhatsApp",
        viewServices: "View Services",
        scroll: "Scroll",

        // Services
        ourServices: "Our Services",
        duration: "Duration",

        // About
        aboutUs: "About Us",
        ourStory: "Our Story",

        // Contact
        getInTouch: "Get In Touch",
        workingHours: "Working Hours",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",

        // Footer
        followUs: "Follow Us",
        allRightsReserved: "All rights reserved",

        // Common
        minutes: "min"
    },
    ar: {
        // Navigation
        services: "الخدمات",
        gallery: "معرض الصور",
        about: "من نحن",
        contact: "اتصل",
        bookNow: "احجز الآن",

        // Hero
        premiumGrooming: "العناية الفاخرة",
        bookViaWhatsApp: "احجز عبر واتساب",
        viewServices: "عرض الخدمات",
        scroll: "مرر للأسفل",

        // Services
        ourServices: "خدماتنا",
        duration: "المدة",

        // About
        aboutUs: "من نحن",
        ourStory: "قصتنا",

        // Contact
        getInTouch: "تواصل معنا",
        workingHours: "ساعات العمل",
        monday: "الإثنين",
        tuesday: "الثلاثاء",
        wednesday: "الأربعاء",
        thursday: "الخميس",
        friday: "الجمعة",
        saturday: "السبت",
        sunday: "الأحد",

        // Footer
        followUs: "تابعنا",
        allRightsReserved: "جميع الحقوق محفوظة",

        // Common
        minutes: "دقيقة"
    }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const t = (key) => {
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
