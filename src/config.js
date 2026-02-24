/**
 * =====================================================
 * BARBER SHOP CONFIGURATION
 * =====================================================
 * Edit this file to customize the landing page for
 * each barber shop. All content, images, and settings
 * are controlled from here.
 * =====================================================
 */

const config = {
    // ─── Shop Info ─────────────────────────────────────
    shopName: "Barber's Town Salon",
    tagline: "Where Style Meets Precision",
    description:
        "Abu Dhabi's premier grooming destination. We combine traditional barbering techniques with modern styling to deliver an unmatched experience.",

    // ─── Contact & Booking ─────────────────────────────
    whatsappNumber: "971559420201", // Without + sign
    whatsappMessage: "Hello! I'd like to book an appointment at {shopName}.",
    phone: "+971 55 942 0201",
    email: "info@barberstownsalon.ae",

    // ─── Location ──────────────────────────────────────
    address: "C38 Doroub Al Khair St - Al Khalidiyah - W9",
    city: "Abu Dhabi",
    country: "UAE",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.174!2d54.3490349!3d24.4725325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67b46d512465:0x284c5b4103ac7242!2sBarber%27s+Town+Salon!5e0!3m2!1sen!2sae!4v1",
    googleMapsLink: "https://www.google.com/maps/place/Barber's+Town+Salon/@24.4725325,54.34646,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e67b46d512465:0x284c5b4103ac7242!8m2!3d24.4725325!4d54.3490349!16s%2Fg%2F11s4cfsvsd?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",

    // ─── Working Hours ─────────────────────────────────
    hours: [
        { day: "Monday", time: "10:00 AM - 12:30 AM" },
        { day: "Tuesday", time: "10:00 AM - 12:30 AM" },
        { day: "Wednesday", time: "10:00 AM - 12:30 AM" },
        { day: "Thursday", time: "10:00 AM - 12:30 AM" },
        { day: "Friday", time: "10:00 AM - 12:30 AM" },
        { day: "Saturday", time: "10:00 AM - 12:30 AM" },
        { day: "Sunday", time: "10:00 AM - 12:30 AM" },
    ],

    // ─── Services ──────────────────────────────────────
    services: [
        {
            name: "Classic Haircut",
            price: "80",
            currency: "AED",
            duration: "30 min",
            description: "Precision cut tailored to your style",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M3 21v-4.243a2 2 0 01.586-1.414l5.657-5.657a2 2 0 012.828 0l8.486 8.486a2 2 0 010 2.828l-5.657 5.657A2 2 0 0119 21H3z"/>
            </svg>`,
        },
        {
            name: "Beard Trim & Shape",
            price: "50",
            currency: "AED",
            duration: "20 min",
            description: "Sharp beard sculpting and grooming",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>`,
        },
        {
            name: "Hot Towel Shave",
            price: "60",
            currency: "AED",
            duration: "25 min",
            description: "Traditional straight razor luxury shave",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14"/>
            </svg>`,
        },
        {
            name: "Hair & Beard Combo",
            price: "120",
            currency: "AED",
            duration: "45 min",
            description: "Complete haircut and beard styling",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
            </svg>`,
        },
        {
            name: "Kids Haircut",
            price: "50",
            currency: "AED",
            duration: "20 min",
            description: "Fun and gentle cuts for young gents",
            icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>`,
        },
        {
            name: "Hair Color",
            price: "150",
            currency: "AED",
            duration: "60 min",
            description: "Professional coloring and highlights",
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
            alt: "Classic haircut styling",
        },
        {
            url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600",
            alt: "Beard trimming",
        },
        {
            url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600",
            alt: "Hot towel shave",
        },
        {
            url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600",
            alt: "Modern fade haircut",
        },
        {
            url: "https://images.unsplash.com/photo-1585747860019-f4e64de4f468?w=600",
            alt: "Barber shop interior",
        },
        {
            url: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600",
            alt: "Premium grooming",
        },
        {
            url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600",
            alt: "Styling in progress",
        },
        {
            url: "https://images.unsplash.com/photo-1578253698699-154cfd8044c3?w=600",
            alt: "Barber tools closeup",
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
        title: "Barber's Town Salon — Premium Barber Shop in Abu Dhabi",
        description:
            "Book your next haircut at Barber's Town Salon. Abu Dhabi's finest barber shop offering premium cuts, beard grooming, and hot towel shaves.",
        keywords: "barber, barbershop, Abu Dhabi, haircut, beard trim, grooming, UAE, Barber's Town",
    },
};

export default config;
