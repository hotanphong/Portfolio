import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
import resumePdf from '../../assets/imgs/HoTanPhong-Resume.pdf'
import './Navbar.css'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [isDownloading, setIsDownloading] = useState(false)
    const downloadTimerRef = useRef(null)
    const { theme, toggleTheme } = useTheme()
    const { language, toggleLanguage, t } = useLanguage()

    // Handle scroll effect and active section tracking
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            // Determine active section
            const sections = ['home', 'about', 'projects', 'contact']
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Cleanup pending resume loading timer
    useEffect(() => () => {
        if (downloadTimerRef.current) {
            clearTimeout(downloadTimerRef.current)
        }
    }, [])

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false)
        const element = document.getElementById(id)
        if (element) {
            const offset = 80 // Navbar height offset
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

    const navLinks = [
        { id: 'home', label: t('nav.home') },
        { id: 'about', label: t('nav.about') },
        { id: 'projects', label: t('nav.projects') },
        { id: 'contact', label: t('nav.contact') },
    ]

    const handleResumeClick = () => {
        if (downloadTimerRef.current) {
            clearTimeout(downloadTimerRef.current)
        }
        setIsDownloading(true)
        downloadTimerRef.current = setTimeout(() => setIsDownloading(false), 1800)
    }

    return (
        <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <nav className="navbar__container container">
                {/* Logo */}
                <a onClick={() => scrollToSection('home')} className="navbar__logo" style={{ cursor: 'pointer' }}>
                    <span className="navbar__logo-icon">P</span>
                    <span className="navbar__logo-text">Ho Tan Phong</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="navbar__links">
                    {navLinks.map(({ id, label }) => (
                        <li key={id}>
                            <button
                                onClick={() => scrollToSection(id)}
                                className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="navbar__actions">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="btn-icon"
                        aria-label="Toggle theme"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {theme === 'dark' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="btn-text"
                        title="Switch Language"
                    >
                        {language.toUpperCase()}
                    </button>

                    {/* Resume Button */}
                    <a
                        href={resumePdf}
                        download="HoTanPhong-Resume.pdf"
                        onClick={handleResumeClick}
                        aria-busy={isDownloading}
                        className={`btn btn-primary navbar__resume-btn${isDownloading ? ' is-loading' : ''}`}
                    >
                        {isDownloading ? (
                            <span className="navbar__spinner" aria-hidden="true"></span>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7,10 12,15 17,10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        )}
                        {t('nav.resume')}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`navbar__mobile-btn ${isMobileMenuOpen ? 'navbar__mobile-btn--open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Menu */}
                <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
                    <ul className="navbar__mobile-links">
                        {navLinks.map(({ id, label }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className={`navbar__mobile-link ${activeSection === id ? 'navbar__mobile-link--active' : ''}`}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}

                        <div className="navbar__mobile-controls">
                            <button
                                onClick={toggleTheme}
                                className="navbar__mobile-control-btn"
                            >
                                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                            </button>
                            <button
                                onClick={toggleLanguage}
                                className="navbar__mobile-control-btn"
                            >
                                🌐 {language === 'en' ? 'Tiếng Việt' : 'English'}
                            </button>
                        </div>

                        <li>
                            <a
                                href={resumePdf}
                                download="HoTanPhong-Resume.pdf"
                                onClick={handleResumeClick}
                                aria-busy={isDownloading}
                                className={`btn btn-primary navbar__mobile-resume${isDownloading ? ' is-loading' : ''}`}
                            >
                                {isDownloading ? <span className="navbar__spinner" aria-hidden="true"></span> : null}
                                {t('nav.resume')}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
