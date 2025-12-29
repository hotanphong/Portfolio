import './TechStack.css'
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiNodedotjs, SiExpress, SiPostgresql, SiDocker, SiGit } from 'react-icons/si'
import { TbApi, TbShieldCheck, TbDatabase } from 'react-icons/tb'

function TechStack() {
    const categories = [
        {
            title: 'Languages',
            items: [
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'SQL', icon: <TbDatabase /> },
            ],
        },
        {
            title: 'Frontend',
            items: [
                { name: 'React', icon: <SiReact /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                { name: 'HTML/CSS', icon: <SiHtml5 /> },
            ],
        },
        {
            title: 'Backend',
            items: [
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'RESTful API', icon: <TbApi /> },
                { name: 'JWT', icon: <TbShieldCheck /> },
            ],
        },
        {
            title: 'Database & Tools',
            items: [
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
                { name: 'Docker', icon: <SiDocker /> },
                { name: 'Git', icon: <SiGit /> },
            ],
        },
    ]

    return (
        <div className="techstack">
            {categories.map((cat) => (
                <div key={cat.title} className="techstack__category">
                    <h3 className="techstack__category-title">{cat.title}</h3>
                    <div className="techstack__grid">
                        {cat.items.map((item) => (
                            <div key={item.name} className="techstack__chip" title={item.name}>
                                <span className="techstack__chip-icon">{item.icon}</span>
                                <span className="techstack__chip-label">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TechStack
