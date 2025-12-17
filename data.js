// Portfolio Data
const portfolioData = {
    // Personal Info
    info: {
        name: "Phan Nguyễn Duy Kha",
        role: "Media Producer & Visual Storyteller",
        email: "duykha@example.com",
        phone: "+84 123 456 789",
        location: "Ho Chi Minh City, Vietnam",
        description: "Creative media producer specializing in videography, post-production, and visual design with expertise in beauty pageants, events, and brand storytelling."
    },

    // Stats
    stats: [
        { number: "5+", label: "Years Experience" },
        { number: "100+", label: "Projects Completed" },
        { number: "50+", label: "Happy Clients" },
        { number: "20+", label: "Awards Won" }
    ],

    // Gallery Items
    gallery: {
        design: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
                thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
                title: "Brand Identity Design",
                category: "design"
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200",
                thumb: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600",
                title: "Event Poster Series",
                category: "design"
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
                thumb: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
                title: "Digital Interface",
                category: "design"
            }
        ],
        photography: [
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200",
                thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600",
                title: "Beauty Pageant",
                category: "photography"
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200",
                thumb: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
                title: "Professional Portrait",
                category: "photography"
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=1200",
                thumb: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600",
                title: "Fashion Runway",
                category: "photography"
            }
        ],
        video: [
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200",
                thumb: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600",
                title: "Brand Commercial",
                category: "video",
                isVideo: true
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200",
                thumb: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600",
                title: "Music Video",
                category: "video",
                isVideo: true
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200",
                thumb: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600",
                title: "Documentary Short",
                category: "video",
                isVideo: true
            }
        ]
    },

    // Projects
    projects: [
        {
            id: 1,
            title: "Miss Charm International",
            category: "BEAUTY PAGEANT",
            description: "Complete video coverage and highlight reels for one of Vietnam's premier beauty pageants.",
            videoId: "VIDEO_ID_1"
        },
        {
            id: 2,
            title: "University Gala Night",
            category: "LIVE EVENT",
            description: "Multi-camera production for UMT's annual celebration, featuring performances and speeches.",
            videoId: "VIDEO_ID_2"
        },
        {
            id: 3,
            title: "Brand Campaign 2024",
            category: "COMMERCIAL",
            description: "High-impact commercial campaign for a leading Vietnamese fashion brand.",
            videoId: "VIDEO_ID_3"
        },
        {
            id: 4,
            title: "Documentary: Behind the Crown",
            category: "DOCUMENTARY",
            description: "A documentary exploring the journey of beauty pageant contestants.",
            videoId: "VIDEO_ID_4"
        },
        {
            id: 5,
            title: "Music Video Production",
            category: "MUSIC VIDEO",
            description: "Cinematic music video production with creative storytelling and visual effects.",
            videoId: "VIDEO_ID_5"
        },
        {
            id: 6,
            title: "Corporate Event Highlights",
            category: "CORPORATE",
            description: "Professional coverage of corporate events and conferences.",
            videoId: "VIDEO_ID_6"
        }
    ],

    // Services
    services: [
        {
            title: "Videography",
            description: "Professional video production for events, commercials, and creative projects with cinematic quality."
        },
        {
            title: "Post-Production",
            description: "Expert editing, color grading, and visual effects to bring your vision to life."
        },
        {
            title: "Design & Branding",
            description: "Creative design solutions for visual identity, marketing materials, and digital content."
        }
    ]
};
