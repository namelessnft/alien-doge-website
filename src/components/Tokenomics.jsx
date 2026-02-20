import './Tokenomics.css'

const tokenStats = [
    { value: '1B', label: 'Total Supply' },
    { value: '0%', label: 'Tax' },
    { value: '100%', label: 'Community' },
]

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="tokenomics section">
            <div className="grid-bg"></div>
            <div className="container">
                <h2 className="section-title">Tokenomics</h2>

                <div className="tokenomics-simple">
                    {tokenStats.map((stat, index) => (
                        <div key={index} className="stat-simple">
                            <span className="stat-value-simple">{stat.value}</span>
                            <span className="stat-label-simple">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
