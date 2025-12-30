import { useLanguage } from '../../contexts/LanguageContext'
import TechStack from '../../components/TechStack/TechStack'
import './About.css'

function About() {
    const { t } = useLanguage()

    // Get lists from translations
    const education = t('about.educationList')
    const goals = t('about.goals')

    return (
        <div className="about page">

            <section className="about__header section">
                <div className="container">
                    <h1 className="about__title animate-fade-in">
                        {t('about.title')}
                    </h1>
                    <p className="about__intro animate-fade-in delay-1">
                        {t('about.subtitle')}
                    </p>
                </div>
            </section>


            <section className="about__summary section">
                <div className="container">
                    <div className="about__summary-grid">
                        <div className="about__summary-content">
                            <h2 className="section-title">{t('about.summaryTitle')}</h2>
                            <div className="about__summary-text">
                                <p dangerouslySetInnerHTML={{ __html: t('about.summary') }}></p>
                                <p>{t('about.summary2')}</p>
                                <p>{t('about.summary3')}</p>
                            </div>
                        </div>

                        <div className="about__summary-stats">
                            <div className="stat-card">
                                <span className="stat-card__number">3+</span>
                                <span className="stat-card__label">{t('about.stats.projects')}</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-card__number">8+</span>
                                <span className="stat-card__label">{t('about.stats.tech')}</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-card__number">100%</span>
                                <span className="stat-card__label">{t('about.stats.commitment')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about__skills section">
                <div className="container">
                    <h2 className="section-title">{t('about.skillsTitle')}</h2>
                    <p className="section-subtitle">{t('about.skillsSubtitle')}</p>

                    <TechStack />
                </div>
            </section>


            <section className="about__education section">
                <div className="container">
                    <h2 className="section-title">{t('about.educationTitle')}</h2>
                    <p className="section-subtitle">{t('about.educationSubtitle')}</p>

                    <div className="education-grid">
                        {Array.isArray(education) && education.map((edu, index) => (
                            <div key={index} className="education-card">
                                <div className="education-card__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                    </svg>
                                </div>
                                <div className="education-card__content">
                                    <span className="education-card__period">{edu.period}</span>
                                    <h3 className="education-card__degree">{edu.degree}</h3>
                                    <p className="education-card__school">{edu.school}</p>
                                    <p className="education-card__description">{edu.description}</p>
                                    <div className="education-card__highlights">
                                        {edu.highlights.map((highlight, i) => (
                                            <span key={i} className="tag">{highlight}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="about__goals section">
                <div className="container">
                    <div className="goals-box">
                        <h2 className="section-title">{t('about.goalsTitle')}</h2>
                        <div className="goals-content">
                            <p>{t('about.goalsContent.p1')}</p>
                            <p>{t('about.goalsContent.p2')}</p>
                            <div className="goals-values">
                                <div className="goal-value">
                                    <span className="goal-value__icon">🎯</span>
                                    <span className="goal-value__text">{t('about.goalsContent.values.learning')}</span>
                                </div>
                                <div className="goal-value">
                                    <span className="goal-value__icon">🤝</span>
                                    <span className="goal-value__text">{t('about.goalsContent.values.collab')}</span>
                                </div>
                                <div className="goal-value">
                                    <span className="goal-value__icon">💡</span>
                                    <span className="goal-value__text">{t('about.goalsContent.values.innovation')}</span>
                                </div>
                                <div className="goal-value">
                                    <span className="goal-value__icon">✨</span>
                                    <span className="goal-value__text">{t('about.goalsContent.values.quality')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
