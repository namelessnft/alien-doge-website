import FrameAnimation from './FrameAnimation'
import { ChevronDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="grid-bg"></div>
                <div className="particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            '--delay': `${i * 0.5}s`,
                            '--x': `${Math.random() * 100}%`,
                            '--duration': `${10 + Math.random() * 20}s`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="hero-scroll-container">
                <div className="hero-animation-container">
                    <FrameAnimation />
                </div>

                <div className="hero-text">
                    <h1 className="hero-title">
                        <span className="title-line">ALIEN</span>
                        <span className="title-line accent">DOGE</span>
                    </h1>
                    <p className="hero-subtitle">The Future of Memecoins Has Arrived</p>

                    <div className="hero-cta">
                        <a href="#" className="btn btn-primary">
                            Buy Now
                        </a>
                        <a href="#" className="btn btn-secondary">
                            View Chart
                        </a>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll to explore</span>
                <ChevronDown className="scroll-icon" size={24} />
            </div>
        </section>
    )
}
