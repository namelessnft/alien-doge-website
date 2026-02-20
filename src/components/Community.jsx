import { Twitter, MessageCircle, Send } from 'lucide-react'
import './Community.css'

const socials = [
    {
        icon: Twitter,
        name: 'Twitter / X',
        link: '#',
        followers: '50K+',
    },
    {
        icon: MessageCircle,
        name: 'Telegram',
        link: '#',
        members: '100K+',
    },
    {
        icon: Send,
        name: 'Discord',
        link: '#',
        members: '25K+',
    },
]

export default function Community() {
    return (
        <section id="community" className="community section">
            <div className="grid-bg"></div>
            <div className="container">
                <h2 className="section-title">Join The Community</h2>

                <p className="community-intro">
                    Become part of the Alien Doge army! Our community is growing fast.
                    Join us on our journey to the moon and beyond!
                </p>

                <div className="social-links">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            className="social-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="social-icon">
                                <social.icon size={40} />
                            </div>
                            <div className="social-info">
                                <span className="social-name">{social.name}</span>
                                <span className="social-count">{social.followers || social.members} {social.followers ? 'Followers' : 'Members'}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="cta-box">
                    <h3 className="cta-title">Ready to the moon?</h3>
                    <p className="cta-text">Buy $ALIENDOGE now and join the alien invasion!</p>
                    <a href="#" className="btn btn-primary">
                        Buy Now
                    </a>
                </div>
            </div>
        </section>
    )
}
