import styles from "./slider.module.css";
import { useState } from "react";
import Image from "next/image";
import Video from "./video";
import ReactTouchEvents from "./touch_event";

export default function Slider({ slides, width = 500, height = 500 }) {
  // the currently acive slide in the slider
  const [currentSlide, setCurrentSlide] = useState(0);
  // buttonClass is the class of the dotted buttons below the slider
  const [buttonClass, setButtonClass] = useState(
    slides.map((_, idx) => {
      if (idx == 0) {
        return `${styles.dot} ${styles.active}`;
      }
      return `${styles.dot}`;
    })
  );

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
    setButtonClass(
      slides.map((_, i) => {
        if (i == idx) {
          return `${styles.dot} ${styles.active}`;
        }
        return `${styles.dot}`;
      })
    );
  };

  const handleSwipe = (_, direction) => {
    const maxIdx = slides.length - 1;
    switch (direction) {
      case "left":
        if (currentSlide != maxIdx) {
          goToSlide(currentSlide + 1);
        }
        break;
      case "right":
        if (currentSlide != 0) {
          goToSlide(currentSlide - 1);
        }
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        {slides.map((_, idx) => {
          return (
            <ReactTouchEvents key={`touch-${idx}`} onSwipe={handleSwipe}>
              <div key={slides[idx]} className={styles.inner}>
                {(isVideo(slides[idx]) && (
                  <Video
                    src={slides[idx]}
                    width={width}
                    height={height}
                    style={{ opacity: idx === currentSlide ? "100%" : "0%" }}
                  />
                )) || (
                  <Image
                    alt={slides[idx]}
                    src={slides[idx]}
                    width={width}
                    height={height}
                    draggable="false"
                    style={{
                      userDrag: "none",
                      opacity: idx === currentSlide ? "100%" : "0%",
                    }}
                    preload="true"
                  />
                )}
              </div>
            </ReactTouchEvents>
          );
        })}
      </div>

      <br />
      <div>
        {slides.map((_, idx) => {
          return (
            <span
              key={idx}
              className={buttonClass[idx]}
              onClick={() => goToSlide(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}

function isVideo(slide) {
  let slideLowercase = slide.toLowerCase();
  return (
    slideLowercase.endsWith(".mp4") ||
    slideLowercase.endsWith(".mov") ||
    slideLowercase.includes("youtube.com")
  );
}
