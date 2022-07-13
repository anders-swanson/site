import styles from './slider.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Video from './video'
import ReactTouchEvents from "react-touch-events";

export default function Slider({ slides, width, height }) {
    const imgWidth = width ? width : "500px"
    const imgHeight = height ? height : "500px"

    // the currently acive slide in the slider
    const [currentSlide, setCurrentSlide] = useState(0)
    // buttonClass is the class of the dotted buttons below the slider
    const [buttonClass, setButtonClass] = useState(slides.map((_, idx) => {
        if (idx == 0) {
            return `${styles.dot} ${styles.active}`
        }
        return `${styles.dot}`
    }))
    
    const goToSlide = (idx) => {
        setCurrentSlide(idx)
        setButtonClass(slides.map((_, i) => {
            if (i == idx) {
                return `${styles.dot} ${styles.active}`
            }
            return `${styles.dot}`
        }))
    }

    const handleSwipe = (_, direction) => {
        const maxIdx = slides.length - 1
        switch (direction) {
            case "left":
                if (currentSlide != maxIdx) {
                    goToSlide(currentSlide + 1)
                }
                break
            case "right":
                if (currentSlide != 0) {
                    goToSlide(currentSlide - 1)
                }
                break 
        }
    }

    return (
        <div
            className={styles.container}
        >
            <ReactTouchEvents
                onSwipe={handleSwipe}
            >
                <div 
                    key={slides[currentSlide]}
                >
                    {isVideo(slides[currentSlide]) && (
                        <Video            
                            src={slides[currentSlide]}
                            width={imgWidth}
                            height={imgHeight}
                        />
                    ) || (
                        <Image
                            alt={slides[currentSlide]}
                            src={slides[currentSlide]}
                            width={imgWidth}
                            height={imgHeight}
                            draggable="false"
                            style={{"userDrag": "none"}}
                        />
                    )}
                </div> 
            </ReactTouchEvents>
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
