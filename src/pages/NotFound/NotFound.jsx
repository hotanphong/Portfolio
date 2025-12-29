import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return (
        <div className="not-found page">
            <div className="not-found__container container">
                <div className="not-found__content">
                    <h1 className="not-found__code">404</h1>
                    <h2 className="not-found__title">Page Not Found</h2>
                    <p className="not-found__description">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="not-found__actions">
                        <Link to="/" className="btn btn-primary btn--lg">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Back to Home
                        </Link>
                        <Link to="/projects" className="btn btn-secondary btn--lg">
                            View Projects
                        </Link>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="not-found__visual">
                    <div className="not-found__icon">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                            <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                            <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
