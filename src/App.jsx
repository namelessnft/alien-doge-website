import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Community from './components/Community'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Tokenomics />
                <Roadmap />
                <Community />
            </main>
            <Footer />
        </div>
    )
}

export default App
