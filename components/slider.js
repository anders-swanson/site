import styles from './slider.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Video from './video'

export default function Slider({ slides, width, height }) {
    const imgWidth = width ? width : "500px"
    const imgHeight = height ? height : "500px"

    // the currently acive slide in the slider
    const [currentSlide, setCurrentSlide] = useState(slides[0])
    // buttonClass is the class of the dotted buttons below the slider
    const [buttonClass, setButtonClass] = useState(slides.map((_, idx) => {
        if (idx == 0) {
            return `${styles.dot} ${styles.active}`
        }
        return `${styles.dot}`
    }))
    
    const goToSlide = (idx) => {
        setCurrentSlide(slides[idx])
        setButtonClass(slides.map((_, i) => {
            if (i == idx) {
                return `${styles.dot} ${styles.active}`
            }
            return `${styles.dot}`
        }))
    }

    return (
        <div
            className={styles.container}
        >
            <div key={currentSlide}>
                {isVideo(currentSlide) && (
                    <Video            
                        src={currentSlide}
                        width={imgWidth}
                        height={imgHeight}
                    />
                ) || (
                    <Image
                        alt={currentSlide}
                        src={currentSlide}
                        width={imgWidth}
                        height={imgHeight}
                    />
                )}
            </div>            
            <br/>
            <div>
            {                
                slides.map((_, idx) => {
                    return (
                        <span
                            key={idx}
                            className={buttonClass[idx]}
                            onClick={() => goToSlide(idx)}                         
                        />
                    )
                })
            } 
            </div>             
        </div>
    )
}

function isVideo(slide) {
    let slideLowercase = slide.toLowerCase()
    return slideLowercase.endsWith('.mp4') || slideLowercase.endsWith('.mov') || slideLowercase.includes('youtube.com')
}
