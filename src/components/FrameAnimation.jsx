import { useState, useEffect, useRef, useCallback } from 'react'
import './FrameAnimation.css'

const TOTAL_FRAMES = 199

export default function FrameAnimation() {
    const [currentFrame, setCurrentFrame] = useState(1)
    const [isLoaded, setIsLoaded] = useState(false)

    // Preload all frames
    useEffect(() => {
        const preloadImages = async () => {
            const promises = []

            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const promise = new Promise((resolve) => {
                    const img = new Image()
                    img.src = `/img/ezgif-frame-${String(i).padStart(3, '0')}.jpg`
                    img.onload = () => resolve(true)
                    img.onerror = () => resolve(false)
                })
                promises.push(promise)
            }

            await Promise.all(promises)
            setIsLoaded(true)
        }

        preloadImages()
    }, [])

    // Handle scroll to update frame - maps scroll to frame number
    const updateFrame = useCallback(() => {
        const windowHeight = window.innerHeight
        const scrollY = window.scrollY
        const totalScrollHeight = windowHeight * 3 // 400vh - 100vh = 300vh

        // Calculate progress from 0 to 1 based on scroll position
        const progress = Math.max(0, Math.min(1, scrollY / totalScrollHeight))

        // Map progress to frame number (1 to TOTAL_FRAMES)
        const frameNumber = Math.max(1, Math.min(TOTAL_FRAMES, Math.ceil(progress * TOTAL_FRAMES)))

        setCurrentFrame(frameNumber)
    }, [])

    // Add scroll listener
    useEffect(() => {
        window.addEventListener('scroll', updateFrame, { passive: true })
        window.addEventListener('resize', updateFrame, { passive: true })

        // Initial frame update
        updateFrame()

        return () => {
            window.removeEventListener('scroll', updateFrame)
            window.removeEventListener('resize', updateFrame)
        }
    }, [updateFrame])

    const frameNumber = String(currentFrame).padStart(3, '0')
    const imageUrl = `/img/ezgif-frame-${frameNumber}.jpg`

    return (
        <div className="frame-animation">
            {!isLoaded && (
                <div className="loading">
                    <div className="loading-spinner"></div>
                </div>
            )}
            <img
                src={imageUrl}
                alt={`Alien Doge Frame ${currentFrame}`}
                className={`animation-frame ${isLoaded ? 'loaded' : ''}`}
                draggable={false}
            />
        </div>
    )
}
