import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import resumePdf from '../../assets/imgs/HoTanPhong-Resume.pdf'
import './Home.css'

function Home() {
    const { t } = useLanguage()

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    const skillIcons = {
        'TypeScript': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.125 0C0.503906 0 0 0.503906 0 1.125V22.875C0 23.4961 0.503906 24 1.125 24H22.875C23.4961 24 24 23.4961 24 22.875V1.125C24 0.503906 23.4961 0 22.875 0H1.125ZM17.4375 9.25781H21.8438V21.1406C21.8438 22.6172 20.6602 23.5312 18.6797 23.5312C17.2969 23.5312 16.0312 22.9922 15.3359 22.3125L16.5078 20.0156C17.0234 20.4844 17.6562 21.0234 18.4453 21.0234C19.3359 21.0234 19.4531 20.5781 19.4531 19.7812V11.7422H17.4375V9.25781ZM11.1797 9.25781H15.8203V11.7422H14.1797V23.25H11.5312V11.7422H9.86719V9.25781H11.1797Z" fill="#3178C6" />
            </svg>
        ),
        'JavaScript': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H24V24H0V0Z" fill="#F7DF1E" />
                <path d="M21.15 18.75C20.67 19.92 19.53 20.73 18.21 20.73C16.89 20.73 15.84 19.95 15.54 18.96L17.13 18.06C17.31 18.57 17.64 19.08 18.21 19.08C18.66 19.08 1.14 19.4531 18.99 19.08C19.41 18.69 19.59 18.21 19.59 17.4V11.73H21.15V18.75ZM15.42 9.27H20.07V11.76H18.42V23.25H15.77V11.76H14.11V9.27H15.42Z" fill="black" opacity="0" />
                <path d="M11.6377 18.8354C11.127 19.8978 10.0381 20.6695 8.78441 20.6695C7.30902 20.6695 6.27361 19.8242 5.91892 18.75L7.817 17.5855C8.04944 18.1729 8.29491 18.8266 8.78441 18.8266C9.28821 18.8266 9.53368 18.5545 9.53368 18.0645V9.28125H11.6377V18.8354ZM21.5625 18.8354C21.0518 19.8978 19.9629 20.6695 18.7093 20.6695C17.2339 20.6695 16.1984 19.8242 15.8437 18.75L17.7419 17.5855C17.9743 18.1729 18.2198 18.8266 18.7093 18.8266C19.2131 18.8266 19.4585 18.5545 19.4585 18.0645V9.28125H21.5625V18.8354Z" fill="black" opacity="0" />
                <path d="M18.134 18.46L19.434 17.61C20.144 18.8 20.914 19.45 22.384 19.45C23.634 19.45 24.464 18.85 24.464 17.91C24.464 17.15 23.904 16.63 22.254 15.93L20.844 15.34C18.824 14.48 17.554 13.38 17.554 11.2C17.554 8.94 19.344 7.39 22.184 7.39C24.494 7.39 26.114 8.35 26.964 10.04L25.684 10.82C25.074 9.77 24.084 9.17 22.234 9.17C21.054 9.17 20.154 9.73 20.154 10.61C20.154 11.33 20.694 11.75 22.144 12.36L23.554 12.98C25.964 14.01 27.134 15.22 27.134 17.65C27.134 20.35 25.094 21.31 22.324 21.31C19.804 21.31 18.254 20.25 18.134 18.46ZM10.514 21.31C7.834 21.31 6.134 20.3 5.864 18.04L7.334 17.22C7.574 18.39 8.214 19.2 10.464 19.2C12.184 19.2 13.194 18.57 13.194 16.7V7.63H14.794V16.76C14.794 20.08 12.924 21.31 10.514 21.31Z" transform="translate(-4, 0)" fill="black" />
            </svg>
        ),
        'Node.js': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.125 6.75L12 2.625L4.875 6.75V15L12 19.125L19.125 15V6.75Z" stroke="#339933" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12 7.5L15 9.25V12.75L12 14.5L9 12.75V9.25L12 7.5Z" fill="#339933" />
            </svg>
        ),
        'Express.js': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="white" stroke="#333" strokeWidth="1" />
                <path d="M6 8H10V10H8V11H10V13H8V14H10V16H6V8Z" fill="#333" />
                <path d="M12 8L14 11.5L16 8H18L15 12.5L18 17H16L14 13.5L12 17H10L13 12.5L10 8H12Z" fill="#333" />
            </svg>
        ),
        'PostgreSQL': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4286 3C13.2351 3 11.1315 3.86905 9.58442 5.41558C8.03734 6.96211 7.16883 9.06574 7.16883 11.2594C7.16883 11.3857 7.17143 11.4506 7.17662 11.5156H9.51299C9.5078 11.4506 9.5052 11.3857 9.5052 11.2594C9.5052 9.68266 10.1332 8.16938 11.2483 7.05436C12.3633 5.93933 13.8766 5.3113 15.4533 5.3113V3H15.4286ZM18.5714 3V5.3113C20.1481 5.3113 21.6614 5.93933 22.7765 7.05436C23.8915 8.16938 24.5195 9.68266 24.5195 11.2594C24.5195 11.3857 24.5169 11.4506 24.5117 11.5156H26.8481C26.8533 11.4506 26.8559 11.3857 26.8559 11.2594C26.8559 9.06574 25.9873 6.96211 24.4403 5.41558C22.8932 3.86905 20.7896 3 18.5961 3H18.5714Z" transform="scale(0.8) translate(3, 3)" fill="#336791" />
                <path d="M12 12C9.5 12 7.5 14 7.5 16.5C7.5 19 9.5 21 12 21C14.5 21 16.5 19 16.5 16.5C16.5 14 14.5 12 12 12Z" fill="#336791" />
            </svg>
        ),
        'React': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                <path d="M12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z" stroke="#61DAFB" strokeWidth="1" />
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" />
                <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1" />
                <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1" />
            </svg>
        ),
        'Next.js': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" fill="white" stroke="black" strokeWidth="0.5" />
                <path d="M17.5 18L9 7.5V11.5L15 18.5V18" fill="black" />
                <rect x="7.5" y="7.5" width="1" height="9" fill="black" />
            </svg>
        ),
        'Docker': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12.5C2 10 4 8 7 8V10C5 10 4 11 4 12V16H18V12L21 14V17C21 19 19 21 17 21H5C3 21 2 19 2 17V12.5Z" fill="#2496ED" />
                <rect x="5" y="5" width="2.5" height="2.5" fill="#2496ED" />
                <rect x="8.5" y="5" width="2.5" height="2.5" fill="#2496ED" />
                <rect x="12" y="5" width="2.5" height="2.5" fill="#2496ED" />
                <rect x="5" y="2" width="2.5" height="2.5" fill="#2496ED" />
            </svg>
        ),
    }

    const skills = [
        { name: 'TypeScript', category: 'Language' },
        { name: 'JavaScript', category: 'Language' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express.js', category: 'Backend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'React', category: 'Frontend' },
        { name: 'Next.js', category: 'Frontend' },
        { name: 'Docker', category: 'Tools' },
    ]

    const highlights = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-4" />
                </svg>
            ),
            title: t('home.highlights.projects.title'),
            description: t('home.highlights.projects.desc'),
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            ),
            title: t('home.highlights.solver.title'),
            description: t('home.highlights.solver.desc'),
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: t('home.highlights.team.title'),
            description: t('home.highlights.team.desc'),
        },
    ]

    return (
        <div className="home page">

            <section className="hero">
                <div className="hero__container container">
                    <div className="hero__content">

                        <div className="hero__badge animate-fade-in">
                            <span className="hero__badge-dot"></span>
                            {t('hero.badge')}
                        </div>


                        <h1 className="hero__title animate-fade-in delay-1">
                            {t('hero.greeting')} <span className="gradient-text">Ho Tan Phong</span>
                        </h1>


                        <p className="hero__role animate-fade-in delay-2">
                            {t('hero.role')}
                        </p>


                        <p className="hero__description animate-fade-in delay-3">
                            {t('hero.description')}
                        </p>


                        <div className="hero__actions animate-fade-in delay-4">
                            <button onClick={() => scrollToSection('projects')} className="btn btn-primary btn--lg">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                                {t('hero.viewProjects')}
                            </button>
                            <a
                                href={resumePdf}
                                download="HoTanPhong-Resume.pdf"
                                className="btn btn-secondary btn--lg"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7,10 12,15 17,10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                {t('hero.downloadCv')}
                            </a>
                        </div>
                    </div>


                    <div className="hero__visual animate-fade-in delay-2">

                        <div className="hero__image-container">
                            <img
                                src="/developer-hero.png"
                                alt="Developer Illustration"
                                className="hero__image"
                            />

                            <div className="floating-icons">
                                <div className="floating-icon floating-icon--react">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                                    </svg>
                                </div>
                                <div className="floating-icon floating-icon--js">
                                    <span>JS</span>
                                </div>
                                <div className="floating-icon floating-icon--node">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z" />
                                    </svg>
                                </div>
                                <div className="floating-icon floating-icon--py">
                                    <span>Py</span>
                                </div>
                            </div>

                            <div className="particles">
                                <span className="particle"></span>
                                <span className="particle"></span>
                                <span className="particle"></span>
                                <span className="particle"></span>
                                <span className="particle"></span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="hero__bg-gradient"></div>
            </section>


            <section className="highlights section">
                <div className="container">
                    <div className="highlights__grid">
                        {highlights.map((item, index) => (
                            <div key={index} className="highlight-card">
                                <div className="highlight-card__icon">
                                    {item.icon}
                                </div>
                                <h3 className="highlight-card__title">{item.title}</h3>
                                <p className="highlight-card__description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="home-cta section">
                <div className="container">
                    <div className="home-cta__box">
                        <h2 className="home-cta__title">{t('home.cta.title')}</h2>
                        <p className="home-cta__description">
                            {t('home.cta.desc')}
                        </p>
                        <Link to="/contact" className="btn btn-primary btn--lg">
                            {t('home.cta.btn')}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home
