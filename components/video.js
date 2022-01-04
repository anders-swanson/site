import { useRef } from "react"
import { Waypoint } from "react-waypoint"

// Only play the video when it is in the viewport.
// The video will be paused when it is not in the viewport
export default function Video({ src, height, width, controls}) {
    const videoRef = useRef(null)
    const imgHeight = height ? height : "500px"
    const imgWidth = width ? width : "500px"
    
    return (
        <Waypoint
            onEnter={() => {videoRef.current.play()}}
            onLeave={() => {videoRef.current.pause()}}
        >
            <video
                ref={videoRef}
                width={imgWidth}
                height={imgHeight}
                autoPlay
                muted
                controls={controls}
            >
                <source src={src} type="video/mp4"/>
            </video>
        </Waypoint>
    )
}
