export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
            resume: 'Resume'
        },
        hero: {
            badge: 'Open to Opportunities',
            greeting: "Hi, I'm",
            role: 'Software Engineering Student & Backend Developer',
            description: 'Backend / Web Developer Intern specializing in Node.js (Express), RESTful APIs, and PostgreSQL. I build scalable systems and modern web applications.',
            viewProjects: 'View Projects',
            downloadCv: 'Download CV'
        },
        home: {
            highlights: {
                projects: { title: '3+ Projects', desc: 'Full-stack applications built from scratch' },
                solver: { title: 'Problem Solver', desc: 'Focus on clean, maintainable solutions' },
                team: { title: 'Team Player', desc: 'Experienced in Agile & collaborative work' }
            },
            skills: {
                title: 'Technical Skills',
                subtitle: 'Technologies I work with',
                learnMore: 'Learn more about me'
            },
            cta: {
                title: "Let's Work Together",
                desc: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
                btn: 'Get in Touch'
            }
        },
        about: {
            title: 'About Me',
            subtitle: 'Get to know me better',
            summaryTitle: 'Professional Summary',
            summary: "I'm a intern software developer with a strong foundation in computer science fundamentals and hands-on experience building web applications. My approach combines analytical thinking with creative problem-solving to deliver clean, maintainable code.",
            summary2: "Currently pursuing my BS in Information Technology, I'm focused on full-stack web development with particular interest in modern JavaScript/TypeScript frameworks and cloud technologies. I thrive in collaborative environments and am always eager to learn from experienced developers.",
            summary3: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or writing technical blog posts to share my learning journey with others.",
            stats: {
                projects: 'Projects Completed',
                exp: 'Years of Experience',
                tech: 'Technologies',
                commitment: 'Commitment'
            },
            skillsTitle: 'Technical Skills',
            skillsSubtitle: 'Technologies and tools I work with',
            experienceTitle: 'Experience',
            experienceSubtitle: 'My professional journey',
            educationTitle: 'Education',
            educationSubtitle: 'My academic background',
            goalsTitle: 'Career Goals',
            goals: [
                {
                    title: 'Short-term',
                    desc: 'Master backend technologies and cloud infrastructure while contributing to meaningful open-source projects.'
                },
                {
                    title: 'Long-term',
                    desc: 'Become a Solutions Architect designing scalable, high-performance systems for global applications.'
                }
            ],
            experienceList: [
                {
                    title: 'Website Developer (Intern/Group Project)',
                    company: 'Green Mind - Behavior Analysis Platform',
                    period: '9/2025 - Present',
                    description: 'Developed a behavior analysis survey system. Modeled user behavior based on personality traits (OCEAN), generated dynamic survey questions, and optimized behavioral strategies.',
                    achievements: [
                        'Designed and implemented RESTful APIs',
                        'Designed database schema and handled data persistence (PostgreSQL)',
                        'Integrated backend APIs with Next.js frontend',
                    ],
                },
                {
                    title: 'Website Developer (Group Project)',
                    company: 'Pizza - Vo Dang',
                    period: '4/2025 - 6/2025',
                    description: 'Full-stack pizza ordering website supporting online ordering and order management.',
                    achievements: [
                        'Designed and implemented RESTful APIs with Express.js',
                        'Built full-stack features using Next.js and PostgreSQL',
                        'Collaborated with team of 5 using Git/Pull Requests',
                    ],
                }
            ],
            educationList: [
                {
                    degree: 'Bachelor of Software Engineering',
                    school: 'Duy Tan University',
                    period: '9/2022 - Present',
                    description: 'Complete the core courses, algorithms, and computational subjects proficiently. Good foundational knowledge and apply it effectively.',
                    highlights: ['GPA: 3.5'],
                }
            ],
            goalsContent: {
                p1: "My immediate goal is to secure a position as a Junior Software Developer where I can contribute to meaningful projects while continuing to grow my technical skills.",
                p2: "In the long term, I aspire to become a Full-Stack Engineer capable of architecting and building complete software solutions. I'm particularly interested in working on products that have a positive impact on users' lives.",
                values: {
                    learning: 'Continuous Learning',
                    collab: 'Team Collaboration',
                    innovation: 'Innovation',
                    quality: 'Quality Code'
                }
            }
        },
        contact: {
            title: 'Get In Touch',
            subtitle: "Let's discuss your next project",
            intro: "I'm currently open to new opportunities and would love to hear from you. Whether you have a question, a project idea, or just want to say hello!",
            items: {
                email: 'Email',
                emailDesc: 'Best way to reach me for professional inquiries',
                github: 'GitHub',
                githubDesc: 'Check out my code and contributions',
                phone: 'Phone',
                phoneDesc: 'Available for call or messaging'
            },
            availability: {
                status: 'Currently available for opportunities',
                title: 'Looking for my next challenge',
                description: 'I\'m actively seeking a Junior Software Developer position where I can contribute to meaningful projects and grow alongside experienced team members.',
                prefs: {
                    remote: 'Remote / Hybrid',
                    fulltime: 'Full-time',
                    relocate: 'Willing to Relocate'
                },
                btnEmail: 'Send me an email',
                btnResume: 'View Resume'
            },
            response: {
                title: 'Quick Response Guaranteed',
                text: 'I typically respond within 24-48 hours. If your request is urgent, please mention it in your message.'
            }
        },
        projects: {
            title: 'Featured Projects',
            titleMain: 'My Projects',
            intro: 'A collection of projects that showcase my skills and passion for building useful applications. Each project represents a real problem I\'ve solved.',
            projectCard: {
                preview: 'Project Preview',
                problem: 'Problem',
                solution: 'Solution',
                features: 'Key Features',
                viewCode: 'View Code',
                liveDemo: 'Live Demo'
            },
            subtitle: 'Some of my recent work',
            source: 'Source Code',
            live: 'Live Demo',
            other: 'Other Projects',
            otherSubtitle: 'More things I\'ve built',
            githubCta: {
                title: 'Want to see more?',
                desc: 'Check out my GitHub profile for more projects, contributions, and code samples.',
                btn: 'View GitHub Profile'
            },
            featured: [
                {
                    title: 'Green Mind - Behavior Analysis Platform',
                    problem: 'Need for a system to analyze user behavior based on personality traits and provide tailored recommendations.',
                    solution: 'Built a survey system using OCEAN model to analyze behavior and generate dynamic questions.',
                    techStack: ['TypeScript', 'Next.js', 'Express.js', 'PostgreSQL'],
                    features: [
                        'OCEAN personality trait modeling',
                        'Dynamic survey generation',
                        'Engagement score evaluation',
                        'Mobile App and Dashboard integration',
                        'RESTful API implementation',
                    ]
                },
                {
                    title: 'Pizza - Vo Dang',
                    problem: 'Local pizza shop needed an online ordering system to manage orders and menu efficienty.',
                    solution: 'Developed a full-stack ordering platform with real-time order tracking and admin dashboard.',
                    techStack: ['TypeScript', 'Next.js', 'Express.js', 'PostgreSQL'],
                    features: [
                        'Online pizza ordering',
                        'Order management system',
                        'RESTful API implementation',
                        'Data persistence with PostgreSQL',
                        'Team collaboration (5 members)',
                    ]
                }
            ]
        },
        footer: {
            tagline: 'Building digital experiences with clean code and modern design.',
            copyright: 'Ho Tan Phong. Built with React.',
            credit: 'Designed & Developed with'
        }
    },
    vi: {
        nav: {
            home: 'Trang chủ',
            about: 'Giới thiệu',
            projects: 'Dự án',
            contact: 'Liên hệ',
            resume: 'CV'
        },
        hero: {
            badge: 'Đang tìm kiếm cơ hội',
            greeting: "Xin chào, tôi là",
            role: 'Sinh viên Kỹ thuật Phần mềm & Backend Developer',
            description: 'Thực tập sinh Backend / Web Developer chuyên về Node.js (Express), RESTful APIs, và PostgreSQL. Tôi xây dựng các hệ thống mở rộng và ứng dụng web hiện đại.',
            viewProjects: 'Xem Dự án',
            downloadCv: 'Tải CV'
        },
        home: {
            highlights: {
                projects: { title: '3+ Dự án', desc: 'Ứng dụng Full-stack xây dựng từ đầu' },
                solver: { title: 'Giải quyết vấn đề', desc: 'Tập trung giải pháp sạch, dễ bảo trì' },
                team: { title: 'Làm việc nhóm', desc: 'Có kinh nghiệm với Agile' }
            },
            skills: {
                title: 'Kỹ năng kỹ thuật',
                subtitle: 'Các công nghệ tôi sử dụng',
                learnMore: 'Tìm hiểu thêm'
            },
            cta: {
                title: "Hãy cùng làm việc",
                desc: "Tôi đang tìm kiếm cơ hội mới. Dù bạn có câu hỏi hay chỉ muốn chào hỏi, đừng ngần ngại liên hệ!",
                btn: 'Liên hệ ngay'
            }
        },
        about: {
            title: 'Về tôi',
            subtitle: 'Tìm hiểu thêm về tôi',
            summaryTitle: 'Tóm tắt chuyên môn',
            summary: "Tôi là thực tập sinh phát triển phần mềm với nền tảng vững chắc về khoa học máy tính và kinh nghiệm thực tế. Cách tiếp cận của tôi là kết hợp tư duy phân tích với giải quyết vấn đề sáng tạo.",
            summary2: "Hiện đang học Cử nhân CNTT, tôi tập trung vào Full-stack web với các framework JS/TS hiện đại. Tôi thích nghi tốt trong môi trường cộng tác và luôn khao khát học hỏi.",
            summary3: "Khi không code, tôi thích tìm hiểu công nghệ mới, đóng góp các dự án mã nguồn mở, hoặc viết blog chia sẻ kiến thức.",
            stats: {
                projects: 'Dự án hoàn thành',
                exp: 'Năm kinh nghiệm',
                tech: 'Công nghệ',
                commitment: 'Cam kết'
            },
            skillsTitle: 'Kỹ năng kỹ thuật',
            skillsSubtitle: 'Công nghệ và công cụ',
            experienceTitle: 'Kinh nghiệm',
            experienceSubtitle: 'Hành trình chuyên môn',
            educationTitle: 'Học vấn',
            educationSubtitle: 'Nền tảng học thuật',
            goalsTitle: 'Mục tiêu nghề nghiệp',
            goalsTitle2: 'Mục tiêu nghề nghiệp',
            goals: [
                {
                    title: 'Ngắn hạn',
                    desc: 'Thành thạo công nghệ backend và cloud trong khi đóng góp cho các dự án open-source.'
                },
                {
                    title: 'Dài hạn',
                    desc: 'Trở thành Kiến trúc sư giải pháp thiết kế hệ thống hiệu năng cao cho ứng dụng toàn cầu.'
                }
            ],
            experienceList: [
                {
                    title: 'Lập trình viên Web (Thực tập/Dự án nhóm)',
                    company: 'Green Mind - Nền tảng phân tích hành vi',
                    period: '9/2025 - Hiện tại',
                    description: 'Phát triển hệ thống khảo sát phân tích hành vi. Mô hình hóa hành vi người dùng dựa trên mô hình OCEAN.',
                    achievements: [
                        'Thiết kế và triển khai RESTful APIs',
                        'Thiết kế cơ sở dữ liệu PostgreSQL',
                        'Tích hợp backend API với Next.js frontend',
                    ],
                },
                {
                    title: 'Lập trình viên Web (Dự án nhóm)',
                    company: 'Pizza - Vo Dang',
                    period: '4/2025 - 6/2025',
                    description: 'Website đặt hàng Pizza Full-stack hỗ trợ đặt hàng trực tuyến và quản lý đơn hàng.',
                    achievements: [
                        'Thiết kế và triển khai API với Express.js',
                        'Xây dựng tính năng full-stack với Next.js & PostgreSQL',
                        'Làm việc nhóm 5 người sử dụng Git/Pull Requests',
                    ],
                }
            ],
            educationList: [
                {
                    degree: 'Cử nhân Kỹ thuật Phần mềm',
                    school: 'Đại học Duy Tân',
                    period: '9/2022 - Hiện tại',
                    description: 'Hoàn thành tốt các môn cốt lõi, thuật toán và các môn tính toán. Có nền tảng kiến thức tốt.',
                    highlights: ['GPA: 3.5'],
                }
            ],
            goalsContent: {
                p1: "Mục tiêu trước mắt là trở thành Lập trình viên Junior, đóng góp vào các dự án ý nghĩa và phát triển kỹ năng.",
                p2: "Về lâu dài, tôi hướng đến trở thành Kỹ sư Full-Stack có khả năng kiến trúc các giải pháp phần mềm hoàn chỉnh.",
                values: {
                    learning: 'Học tập liên tục',
                    collab: 'Hợp tác nhóm',
                    innovation: 'Đổi mới',
                    quality: 'Chất lượng Code'
                }
            }
        },
        contact: {
            title: 'Liên hệ',
            subtitle: "Hãy thảo luận về dự án tiếp theo",
            intro: "Tôi đang tìm kiếm cơ hội mới và rất mong nhận được phản hồi từ bạn. Dù là câu hỏi, ý tưởng dự án hay chỉ là lời chào!",
            items: {
                email: 'Email',
                emailDesc: 'Cách tốt nhất để liên hệ về công việc',
                github: 'GitHub',
                githubDesc: 'Xem mã nguồn và đóng góp của tôi',
                phone: 'Điện thoại',
                phoneDesc: 'Sẵn sàng nghe gọi hoặc nhắn tin'
            },
            availability: {
                status: 'Sẵn sàng cho cơ hội mới',
                title: 'Tìm kiếm thử thách tiếp theo',
                description: 'Tôi đang tích cực tìm kiếm vị trí Lập trình viên Junior, nơi tôi có thể đóng góp vào các dự án ý nghĩa và phát triển cùng đồng đội.',
                prefs: {
                    remote: 'Remote / Hybrid',
                    fulltime: 'Toàn thời gian',
                    relocate: 'Sẵn sàng di chuyển'
                },
                btnEmail: 'Gửi Email cho tôi',
                btnResume: 'Xem CV'
            },
            response: {
                title: 'Phản hồi nhanh chóng',
                text: 'Tôi thường phản hồi trong vòng 24-48 giờ. Nếu yêu cầu gấp, vui lòng ghi rõ trong tin nhắn.'
            }
        },
        projects: {
            title: 'Dự án nổi bật',
            titleMain: 'Dự án của tôi',
            intro: 'Một bộ sưu tập các dự án thể hiện kỹ năng và đam mê của tôi trong việc xây dựng các ứng dụng hữu ích.',
            projectCard: {
                preview: 'Xem trước dự án',
                problem: 'Vấn đề',
                solution: 'Giải pháp',
                features: 'Tính năng chính',
                viewCode: 'Xem Code',
                liveDemo: 'Xem Demo'
            },
            subtitle: 'Một số dự án gần đây',
            source: 'Mã nguồn',
            live: 'Xem Demo',
            other: 'Dự án khác',
            otherSubtitle: 'Những thứ khác tôi đã xây dựng',
            githubCta: {
                title: 'Muốn xem thêm?',
                desc: 'Ghé thăm GitHub của tôi để xem thêm dự án, mã nguồn và đóng góp.',
                btn: 'Xem GitHub Profile'
            },
            featured: [
                {
                    title: 'Green Mind - Nền tảng phân tích hành vi',
                    problem: 'Hệ thống phân tích hành vi người dùng dựa trên tính cách và đưa ra gợi ý.',
                    solution: 'Xây dựng hệ thống khảo sát sử dụng mô hình OCEAN để phân tích và tạo câu hỏi động.',
                    techStack: ['TypeScript', 'Next.js', 'Express.js', 'PostgreSQL'],
                    features: [
                        'Mô hình hóa tính cách OCEAN',
                        'Tạo khảo sát động',
                        'Đánh giá điểm tương tác',
                        'Tích hợp Mobile App và Dashboard',
                        'Triển khai RESTful API',
                    ]
                },
                {
                    title: 'Pizza - Vo Dang',
                    problem: 'Cửa hàng pizza địa phương cần hệ thống đặt hàng online quản lý đơn và menu.',
                    solution: 'Phát triển nền tảng đặt hàng full-stack với theo dõi đơn hàng thời gian thực.',
                    techStack: ['TypeScript', 'Next.js', 'Express.js', 'PostgreSQL'],
                    features: [
                        'Đặt hàng pizza trực tuyến',
                        'Hệ thống quản lý đơn hàng',
                        'Triển khai RESTful API',
                        'Lưu trữ dữ liệu với PostgreSQL',
                        'Làm việc nhóm 5 người',
                    ]
                }
            ]
        },
        footer: {
            tagline: 'Xây dựng trải nghiệm số với thiết kế hiện đại.',
            copyright: 'Hồ Tấn Phong. Built with React.',
            credit: 'Thiết kế & Phát triển với'
        }
    }
}
