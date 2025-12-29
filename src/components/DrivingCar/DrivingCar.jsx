import { useEffect, useRef, useState } from 'react'
import './DrivingCar.css'

function DrivingCar() {
    const [position, setPosition] = useState({ x: -100, y: -100, rotation: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const animationRef = useRef(null)
    const progressRef = useRef(0)

    useEffect(() => {
        let pathPoints = []
        let totalLength = 0

        const calculatePath = () => {
            const cards = document.querySelectorAll('.project-card--featured')
            if (cards.length === 0) return false

            const newPathPoints = []
            const padding = 0

            cards.forEach((card, index) => {
                const top = card.offsetTop - padding
                const left = card.offsetLeft - padding
                const width = card.offsetWidth + padding * 2
                const height = card.offsetHeight + padding * 2

                const right = left + width
                const bottom = top + height

                const isCW = index % 2 === 0

                const points = isCW
                    ? [
                        { x: left, y: top },
                        { x: right, y: top },
                        { x: right, y: bottom },
                        { x: left, y: bottom },
                        { x: left, y: top }
                    ]
                    : [
                        { x: left, y: top },
                        { x: left, y: bottom },
                        { x: right, y: bottom },
                        { x: right, y: top },
                        { x: left, y: top }
                    ]

                newPathPoints.push(...points)
            })

            if (newPathPoints.length > 0) {
                newPathPoints.push(newPathPoints[0])
            }

            let length = 0
            for (let i = 0; i < newPathPoints.length - 1; i++) {
                const p1 = newPathPoints[i]
                const p2 = newPathPoints[i + 1]
                const dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
                newPathPoints[i].dist = dist
                length += dist
            }
            totalLength = length
            pathPoints = newPathPoints
            return true
        }

        const animate = () => {
            const projectsSection = document.querySelector('.projects__featured-grid')
            if (!projectsSection) {
                animationRef.current = requestAnimationFrame(animate)
                return
            }

            const sectionRect = projectsSection.getBoundingClientRect()
            const isInView = sectionRect.top < window.innerHeight && sectionRect.bottom > 0
            setIsVisible(isInView)

            if (!isInView || pathPoints.length === 0) {
                if (isInView && pathPoints.length === 0) calculatePath()
                animationRef.current = requestAnimationFrame(animate)
                return
            }

            const speed = 1.75 // Pixel per frame (20% slower)
            progressRef.current = (progressRef.current + speed) % totalLength

            let currentDist = progressRef.current
            let p1, p2

            for (let i = 0; i < pathPoints.length - 1; i++) {
                const segmentLen = pathPoints[i].dist
                if (currentDist <= segmentLen) {
                    p1 = pathPoints[i]
                    p2 = pathPoints[i + 1]
                    break
                }
                currentDist -= segmentLen
            }

            if (p1 && p2) {
                const segmentLen = p1.dist
                const ratio = currentDist / segmentLen

                let x = p1.x + (p2.x - p1.x) * ratio
                let y = p1.y + (p2.y - p1.y) * ratio

                const dx = p2.x - p1.x
                const dy = p2.y - p1.y
                let rotation = Math.atan2(dy, dx) * (180 / Math.PI)

                const terrainBump = Math.sin(progressRef.current * 0.1) * 1.5 + Math.cos(progressRef.current * 0.25) * 1.0;
                const terrainTilt = Math.sin(progressRef.current * 0.15) * 5;

                if (Math.abs(dx) > Math.abs(dy)) {
                    y += terrainBump;
                } else {
                    x += terrainBump;
                    if (dy < 0) {
                        rotation -= 2
                    }
                }

                setPosition({
                    x,
                    y: y,
                    rotation: rotation + terrainTilt
                })
            }

            animationRef.current = requestAnimationFrame(animate)
        }

        const timer = setTimeout(() => {
            calculatePath()
            animate()
        }, 1000)

        window.addEventListener('resize', calculatePath)

        return () => {
            clearTimeout(timer)
            window.removeEventListener('resize', calculatePath)
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [])

    if (!isVisible) return null

    return (
        <div
            className="driving-car"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) rotate(${position.rotation}deg)`
            }}
        >
            <div className="driving-car__body-container">
                <svg viewBox="0 0 60 30" className="driving-car__svg">
                    <defs>
                        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                    </defs>

                    <g className="car-chassis">
                        <path d="M4 18 L10 18 L14 10 L44 10 L50 18 L56 18 L56 24 L4 24 Z" fill="url(#bodyGrad)" />
                        <path d="M16 10 L20 4 L38 4 L42 10 Z" fill="#6d28d9" />
                        <path d="M22 5 L36 5 L39 9 L19 9 Z" fill="#38bdf8" opacity="0.8" />
                        <path d="M2 14 L8 10 L8 14 Z" fill="#4c1d95" />
                        <circle cx="54" cy="20" r="2" fill="#fbbf24" className="car-headlight" />
                        <circle cx="6" cy="20" r="1.5" fill="#ef4444" className="car-taillight" />
                    </g>

                    <g className="car-wheel-front">
                        <circle cx="16" cy="24" r="5" fill="#1f2937" />
                        <circle cx="16" cy="24" r="2" fill="#9ca3af" />
                        <path d="M16 19 L16 29 M11 24 L21 24" stroke="#111" strokeWidth="1" />
                    </g>
                    <g className="car-wheel-rear">
                        <circle cx="44" cy="24" r="5" fill="#1f2937" />
                        <circle cx="44" cy="24" r="2" fill="#9ca3af" />
                        <path d="M44 19 L44 29 M39 24 L49 24" stroke="#111" strokeWidth="1" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default DrivingCar
