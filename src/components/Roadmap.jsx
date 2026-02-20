import { Check } from 'lucide-react'
import './Roadmap.css'

const phases = [
    {
        phase: 'Phase 1',
        title: 'Launch',
        items: [
            'Website Launch',
            'Token Deployment',
            'Liquidity Pool Creation',
            'Community Building',
            'CMC & DexScreener Listing',
        ]
    },
    {
        phase: 'Phase 2',
        title: 'Growth',
        items: [
            'Major CEX Listings',
            'Influencer Partnerships',
            'Trending on DexScreener',
            '1,000+ Holders',
            'Marketing Campaign Launch',
        ]
    },
    {
        phase: 'Phase 3',
        title: 'Expansion',
        items: [
            'Alien Doge NFT Collection',
            'Staking Platform',
            'Cross-chain Bridge',
            '10,000+ Holders',
            'Global Marketing Push',
        ]
    },
    {
        phase: 'Phase 4',
        title: 'Dominance',
        items: [
            'Major CEX Listings',
            'Alien Doge Merchandise',
            '100,000+ Holders',
            'To The Moon!',
            'Beyond The Stars',
        ]
    },
]

export default function Roadmap() {
    return (
        <section id="roadmap" className="roadmap section">
            <div className="grid-bg"></div>
            <div className="container">
                <h2 className="section-title">Roadmap</h2>

                <div className="roadmap-timeline">
                    {phases.map((phase, index) => (
                        <div key={index} className="phase-item">
                            <div className="phase-marker">
                                <div className="marker-dot"></div>
                                {index < phases.length - 1 && <div className="marker-line"></div>}
                            </div>

                            <div className="phase-content">
                                <div className="phase-header">
                                    <span className="phase-label">{phase.phase}</span>
                                    <h3 className="phase-title">{phase.title}</h3>
                                </div>

                                <ul className="phase-items">
                                    {phase.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="phase-item-li">
                                            <Check className="check-icon" size={18} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
