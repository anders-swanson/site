import styles from './slider.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function Slider({ slides, width, height }) {
    const imgWidth = width ? width : "500px"
    const imgHeight = height ? height : "500px"

    const [slide, setSlide] = useState(0)
    const [buttonClass, setButtonClass] = useState(slides.map((_, idx) => {
        if (idx == 0) {
            return `${styles.dot} ${styles.active}`
        }
        return `${styles.dot}`
    }))
    
    const goToSlide = (idx) => {
        setSlide(idx)
        setButtonClass(slides.map((_, i) => {
            if (i == idx) {
                return `${styles.dot} ${styles.active}`
            }
            return `${styles.dot}`
        }))
    }

    return (
        <div className={styles.container}>
            {slides[slide].toLowerCase().endsWith("mp4") && (
                <video
                    width={imgWidth}
                    height={imgHeight}
                    autoPlay
                    muted                    
                >
                    <source src={slides[slide]} type="video/mp4"/>
                </video>
            ) || (
            <Image
                alt={slides[slide]}
                src={slides[slide]}
                width={imgWidth}
                height={imgHeight}
            />
            )}

            
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
