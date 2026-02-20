import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const closeMenu = () => setIsOpen(false)

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Tokenomics', href: '#tokenomics' },
        { name: 'Roadmap', href: '#roadmap' },
        { name: 'Community', href: '#community' },
    ]

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    <span className="logo-text">ALIEN</span>
                    <span className="logo-text accent">DOGE</span>
                </a>

                <div className="navbar-links desktop-only">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#" className="btn btn-primary nav-btn">
                        Buy Now
                    </a>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={closeMenu}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#" className="btn btn-primary mobile-nav-btn">
                            Buy Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
