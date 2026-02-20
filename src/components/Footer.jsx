import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="logo-text">ALIEN</span>
                        <span className="logo-text accent">DOGE</span>
                    </div>

                    <p className="footer-tagline">
                        The Future of Memecoins Has Arrived
                    </p>

                    <div className="footer-disclaimer">
                        <p>
                            <strong>Disclaimer:</strong> $ALIENDOGE is a meme coin with no intrinsic value or expectation of financial return.
                            The coin is for entertainment purposes only. Cryptocurrency trading involves substantial risk.
                            Always do your own research before making any investment decisions.
                        </p>
                    </div>

                    <div className="footer-links">
                        <a href="#" className="footer-link">Terms of Service</a>
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Contract</a>
                    </div>

                    <div className="footer-copyright">
                        <p>© {currentYear} Alien Doge. All rights reserved.</p>
                        <p className="not-financial">This is not financial advice. Invest at your own risk.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
