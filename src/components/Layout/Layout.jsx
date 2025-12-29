import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ScrollRocket from '../ScrollRocket/ScrollRocket'
import './Layout.css'

function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <ScrollRocket />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout

