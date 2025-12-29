import ProjectCard from '../../components/ProjectCard/ProjectCard'
import DrivingCar from '../../components/DrivingCar/DrivingCar'
import { useLanguage } from '../../contexts/LanguageContext'
import './Projects.css'
import greenmindImg from '../../assets/imgs/greenmind.png'
import pizzaImg from '../../assets/imgs/pizza.png'
function Projects() {
    const { t } = useLanguage()

    // Get project details from translations
    const featuredList = t('projects.featured') || []

    // Merge with static data (images, links, etc)
    // Note: Translations array matches index of this static array
    const staticProjectsData = [
        {
            id: 1,
            image: greenmindImg,
            githubUrl: 'https://github.com/VoDangCMU/Green_MindMap_Frontend',
            liveUrl: 'https://www.youtube.com/watch?v=cu8bpSCB1MQ',
            featured: true,
        },
        {
            id: 2,
            image: pizzaImg,
            githubUrl: 'https://github.com/VoDangCMU/PizzaOrderingFrontEnd',
            liveUrl: 'https://www.youtube.com/watch?v=tRzfI6P_mrw',
            featured: true,
        }
    ]

    const projects = staticProjectsData.map((staticData, index) => {
        const translatedData = featuredList[index] || {}
        return {
            ...staticData,
            ...translatedData // merging title, problem, solution, features, techStack
        }
    })

    const featuredProjects = projects.filter(p => p.featured)

    // Currently no "other" projects defined in translation or static, just keeping structure if needed
    const otherProjects = []

    return (
        <div className="projects page">

            <section className="projects__header section">
                <div className="container">
                    <h1 className="projects__title animate-fade-in">
                        {t('projects.titleMain')}
                    </h1>
                    <p className="projects__intro animate-fade-in delay-1">
                        {t('projects.intro')}
                    </p>
                </div>
            </section>


            <section className="projects__featured section">
                <div className="container" style={{ position: 'relative' }}>
                    <DrivingCar />

                    <div className="projects__section-header">
                        <h2 className="section-title">{t('projects.title')}</h2>
                        <p className="section-subtitle">{t('projects.subtitle')}</p>
                    </div>

                    <div className="projects__featured-grid">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} featured={true} index={index} />
                        ))}
                    </div>
                </div>
            </section>


            {otherProjects.length > 0 && (
                <section className="projects__other section">
                    <div className="container">
                        <div className="projects__section-header">
                            <h2 className="section-title">{t('projects.other')}</h2>
                            <p className="section-subtitle">{t('projects.otherSubtitle')}</p>
                        </div>

                        <div className="projects__grid">
                            {otherProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} featured={false} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            )}


            <section className="projects__cta section">
                <div className="container">
                    <div className="projects__cta-box">
                        <div className="projects__cta-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                        <h3 className="projects__cta-title">{t('projects.githubCta.title')}</h3>
                        <p className="projects__cta-description">
                            {t('projects.githubCta.desc')}
                        </p>
                        <a
                            href="https://github.com/hotanphong"
                            className="btn btn-primary btn--lg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            {t('projects.githubCta.btn')}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
