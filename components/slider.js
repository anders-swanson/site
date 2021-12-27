import styles from './slider.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Video from './video'

export default function Slider({ slides, width, height }) {
    const imgWidth = width ? width : "500px"
    const imgHeight = height ? height : "500px"

    const [slide, setSlide] = useState(slides[0])
    const [buttonClass, setButtonClass] = useState(slides.map((_, idx) => {
        if (idx == 0) {
            return `${styles.dot} ${styles.active}`
        }
        return `${styles.dot}`
    }))
    
    const goToSlide = (idx) => {
        setSlide(slides[idx])
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
            style={{
                'minWidth': imgWidth,
                'minHeight': imgHeight
            }}
        >
            <div key={slide}>
                {isVideo(slide) && (
                    <Video            
                        src={slide}
                        width={imgWidth}
                        height={imgHeight}
                    />
                ) || (
                    <Image
                        alt={slide}
                        src={slide}
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
    return slideLowercase.endsWith('.mp4') || slideLowercase.endsWith('.mov')
}
