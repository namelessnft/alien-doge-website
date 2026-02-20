import { Rocket, Zap, Users } from 'lucide-react'
import './About.css'

const features = [
    {
        icon: Rocket,
        title: 'From The Stars',
        description: 'Alien Doge came from a distant galaxy to revolutionize the crypto universe. Born from stardust and memes.'
    },
    {
        icon: Zap,
        title: 'Born To Moon',
        description: 'With explosive tokenomics and a passionate community, Alien Doge is destined for the moon and beyond.'
    },
    {
        icon: Users,
        title: 'Community First',
        description: 'The aliens have landed and they bring gifts. Fair launch, no team tokens, 100% community owned.'
    }
]

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="grid-bg"></div>
            <div className="container">
                <h2 className="section-title">About Alien Doge</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            In the year 2024, a mysterious meteorite crashed into the blockchain,
                            bringing with it a creature unlike any other — <span className="highlight">Alien Doge</span>.
                        </p>
                        <p className="about-description">
                            Unlike his earthly cousin, Alien Doge possesses powers beyond comprehension.
                            He can multiply your investments by the millions, teleport your portfolio
                            to new dimensions, and bring peace to the chaotic world of crypto trading.
                        </p>
                        <p className="about-mission">
                            Our mission is simple: <span className="highlight">to the moon, to mars, and beyond!</span>
                        </p>
                    </div>

                    <div className="about-features">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="feature-icon">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
