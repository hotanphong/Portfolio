import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language')
        return saved || 'en' // Default to English
    })

    useEffect(() => {
        localStorage.setItem('language', language)
        document.documentElement.lang = language
    }, [language])

    const t = (path) => {
        const keys = path.split('.')
        let current = translations[language]

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`)
                return path
            }
            current = current[key]
        }

        return current
    }

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'vi' : 'en')
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
