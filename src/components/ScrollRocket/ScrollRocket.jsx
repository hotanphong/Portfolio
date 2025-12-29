import { useState, useEffect } from 'react'
import './ScrollRocket.css'

function ScrollRocket() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress (0 to 100)
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

            setScrollProgress(progress)
            setIsVisible(scrollTop > 100) // Show after scrolling 100px
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={`scroll-rocket ${isVisible ? 'scroll-rocket--visible' : ''}`}
            style={{
                top: `calc(${scrollProgress * 0.9}vh + 5vh)`, // padding top/bottom
                transform: `translateY(-50%) rotate(${45 + (scrollProgress * 0.5)}deg)` // Subtle tilt as it climbs
            }}
        >
            {/* Rocket Trail */}
            <div className="scroll-rocket__trail">
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Rocket Body */}
            <div className="scroll-rocket__body">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Rocket body */}
                    <path d="M32 4C32 4 44 16 44 36C44 48 40 56 32 60C24 56 20 48 20 36C20 16 32 4 32 4Z"
                        fill="url(#rocketGradient)" stroke="#fff" strokeWidth="1.5" />
                    {/* Window */}
                    <circle cx="32" cy="28" r="6" fill="#1a1a2e" stroke="#61dafb" strokeWidth="1.5" />
                    <circle cx="32" cy="28" r="3" fill="#61dafb" opacity="0.5" />
                    {/* Fins */}
                    <path d="M20 40L12 52L20 48V40Z" fill="#8b5cf6" />
                    <path d="M44 40L52 52L44 48V40Z" fill="#8b5cf6" />
                    {/* Fire */}
                    <path d="M28 58C28 58 30 64 32 64C34 64 36 58 36 58L34 56L32 60L30 56L28 58Z"
                        fill="#f59e0b" className="rocket-fire" />
                    <path d="M30 56C30 56 31 62 32 62C33 62 34 56 34 56"
                        fill="#ef4444" className="rocket-fire-inner" />
                    {/* Gradient definition */}
                    <defs>
                        <linearGradient id="rocketGradient" x1="20" y1="4" x2="44" y2="60">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Progress indicator */}
            <div className="scroll-rocket__progress">
                {Math.round(scrollProgress)}%
            </div>
        </div>
    )
}

export default ScrollRocket
