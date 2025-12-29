import { useLanguage } from '../../contexts/LanguageContext'
import './Contact.css'

function Contact() {
    const { t } = useLanguage()

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: t('contact.items.email'),
            value: 'phongho763@gmail.com',
            href: 'mailto:phongho763@gmail.com',
            description: t('contact.items.emailDesc'),
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            label: t('contact.items.github'),
            value: 'github.com/hotanphong',
            href: 'https://github.com/hotanphong',
            description: t('contact.items.githubDesc'),
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            label: t('contact.items.phone'),
            value: '+84 981548018',
            href: 'tel:+84981548018',
            description: t('contact.items.phoneDesc'),
        },
    ]

    return (
        <div className="contact page">

            <section className="contact__header section">
                <div className="container">
                    <h1 className="contact__title animate-fade-in">
                        {t('contact.title')}
                    </h1>
                    <p className="contact__intro animate-fade-in delay-1">
                        {t('contact.intro')}
                    </p>
                </div>
            </section>


            <section className="contact__main section">
                <div className="container">
                    <div className="contact__grid">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.href}
                                className="contact-card"
                                target={info.href.startsWith('http') ? '_blank' : undefined}
                                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                                <div className="contact-card__icon">
                                    {info.icon}
                                </div>
                                <div className="contact-card__content">
                                    <span className="contact-card__label">{info.label}</span>
                                    <span className="contact-card__value">{info.value}</span>
                                    <span className="contact-card__description">{info.description}</span>
                                </div>
                                <div className="contact-card__arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>


            <section className="contact__availability section">
                <div className="container">
                    <div className="availability-box">
                        <div className="availability-box__status">
                            <span className="availability-box__dot"></span>
                            <span className="availability-box__text">{t('contact.availability.status')}</span>
                        </div>

                        <h2 className="availability-box__title">{t('contact.availability.title')}</h2>

                        <p className="availability-box__description" dangerouslySetInnerHTML={{ __html: t('contact.availability.description') }}></p>

                        <div className="availability-box__preferences">
                            <div className="preference-tag">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                                {t('contact.availability.prefs.remote')}
                            </div>
                            <div className="preference-tag">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                {t('contact.availability.prefs.fulltime')}
                            </div>
                            <div className="preference-tag">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {t('contact.availability.prefs.relocate')}
                            </div>
                        </div>

                        <div className="availability-box__cta">
                            <a href="mailto:phongho763@gmail.com" className="btn btn-primary btn--lg">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                {t('contact.availability.btnEmail')}
                            </a>
                            <a
                                href="/MyCV.pdf"
                                download="MyCV.pdf"
                                className="btn btn-secondary btn--lg"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                                {t('contact.availability.btnResume')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact__note section">
                <div className="container">
                    <div className="response-note">
                        <div className="response-note__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div className="response-note__content">
                            <h3 className="response-note__title">{t('contact.response.title')}</h3>
                            <p className="response-note__text">
                                {t('contact.response.text')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
