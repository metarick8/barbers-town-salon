/**
 * =====================================================
 * BARBER SHOP CONFIGURATION - ARABIC
 * =====================================================
 * Arabic configuration for the barber shop landing page
 * =====================================================
 */

const configAr = {
    // ─── Shop Info ─────────────────────────────────────
    shopName: "صالون حلاقة البلدة",
    tagline: "حيث يلتقي الأناقة بالدقة",
    description:
        "وجهة العناية بالرجل الأولى في أبو ظبي. نحن نجمع بين تقنيات الحلاقة التقليدية والأسلوب العصري لتقديم تجربة لا مثيل لها.",

    // ─── Contact & Booking ─────────────────────────────
    whatsappNumber: "971559420201", // Without + sign
    whatsappMessage: "مرحبا! أود حجز موعد في {shopName}.",
    phone: "+971 55 942 0201",
    email: "info@barberstownsalon.ae",

    // ─── Location ──────────────────────────────────────
    address: "C38 شارع دروب الخير - الخالدية - W9",
    city: "أبو ظبي",
    country: "الإمارات",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.174!2d54.3490349!3d24.4725325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67b46d512465:0x284c5b4103ac7242!2sBarber%27s+Town+Salon!5e0!3m2!1sen!2sae!4v1",
    googleMapsLink: "https://www.google.com/maps/place/Barber's+Town+Salon/@24.4725325,54.34646,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e67b46d512465:0x284c5b4103ac7242!8m2!3d24.4725325!4d54.3490349!16s%2Fg%2F11s4cfsvsd?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",

    // ─── Working Hours ─────────────────────────────────
    hours: [
        { day: "الإثنين", time: "10:00 ص - 12:30 ص" },
        { day: "الثلاثاء", time: "10:00 ص - 12:30 ص" },
        { day: "الأربعاء", time: "10:00 ص - 12:30 ص" },
        { day: "الخميس", time: "10:00 ص - 12:30 ص" },
        { day: "الجمعة", time: "10:00 ص - 12:30 ص" },
        { day: "السبت", time: "10:00 ص - 12:30 ص" },
        { day: "الأحد", time: "10:00 ص - 12:30 ص" },
    ],

    // ─── Services ──────────────────────────────────────
    services: [
        {
            name: "قصة شعر كلاسيكية",
            price: "80",
            currency: "درهم",
            duration: "30",
            description: "قص دقيق مصمم حسب أسلوبك",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M3 21v-4.243a2 2 0 01.586-1.414l5.657-5.657a2 2 0 012.828 0l8.486 8.486a2 2 0 010 2.828l-5.657 5.657A2 2 0 0119 21H3z"/>
            </svg>`,
        },
        {
            name: "تشكيل وتقليم اللحية",
            price: "50",
            currency: "درهم", 
            duration: "20",
            description: "نحت وتصفيف حاد للحية",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>`,
        },
        {
            name: "حلاقة بالمنشفة الساخنة",
            price: "60",
            currency: "درهم",
            duration: "25", 
            description: "حلاقة فاخرة تقليدية بالشفرة",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14"/>
            </svg>`,
        },
        {
            name: "باقة الشعر واللحية",
            price: "120",
            currency: "درهم",
            duration: "45",
            description: "قص شعر وتصفيف لحية كامل",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
            </svg>`,
        },
        {
            name: "قص شعر الأطفال",
            price: "50",
            currency: "درهم",
            duration: "20",
            description: "قصات لطيفة وممتعة للصغار",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>`,
        },
        {
            name: "صبغ الشعر",
            price: "150",
            currency: "درهم",
            duration: "60",
            description: "تلوين وتظليل احترافي",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
            </svg>`,
        },
    ],

    // ─── Gallery ───────────────────────────────────────
    // Paste Instagram image URLs or local image paths here
    gallery: [
        {
            url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600",
            alt: "تصفيف قصة شعر كلاسيكية",
        },
        {
            url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600",
            alt: "تقليم اللحية",
        },
        {
            url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600",
            alt: "حلاقة بالمنشفة الساخنة",
        },
        {
            url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600",
            alt: "قصة شعر عصرية",
        },
        {
            url: "https://images.unsplash.com/photo-1585747860019-f4e64de4f468?w=600",
            alt: "داخل الحلاقة",
        },
        {
            url: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600",
            alt: "العناية الفاخرة",
        },
        {
            url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600",
            alt: "التصفيف قيد التنفيذ",
        },
        {
            url: "https://images.unsplash.com/photo-1578253698699-154cfd8044c3?w=600",
            alt: "أدوات الحلاقة عن قرب",
        },
    ],

    // ─── Social Media ──────────────────────────────────
    social: {
        instagram: "https://instagram.com/barberstownsalon",
        tiktok: "",
        facebook: "",
        snapchat: "",
    },

    // ─── SEO ───────────────────────────────────
    seo: {
        title: "صالون حلاقة البلدة — حلاقة فاخرة في أبو ظبي",
        description:
            "احجز قصة شعرك التالية في صالون حلاقة البلدة. أفضل حلاقة في أبو ظبي تقدم قصات فاخرة، وعناية باللحية، وحلاقة بالمنشفة الساخنة.",
        keywords: "حلاقة، صالون حلاقة، أبو ظبي، قصة شعر، تقليم لحية، عناية بالرجل، الإمارات، حلاقة البلدة",
    },
};

export default configAr;
