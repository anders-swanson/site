import { useRef } from "react";
import { Waypoint } from "react-waypoint";

const videoTypes = {
  youtube: "youtube",
  mp4: "mp4",
};

// Only play the video when it is in the viewport.
// The video will be paused when it is not in the viewport
export default function Video({ src, height, width, controls, style }) {
  const videoRef = useRef(null);
  const imgHeight = height ? height : "500px";
  const imgWidth = width ? width : "500px";

  let videoType = videoTypes.mp4;
  if (src.includes("youtube.com")) {
    videoType = videoTypes.youtube;
    let paths = src.split("/");
    const id = paths[paths.length - 1];
    src = `${src}?playlist=${id}&loop=1&controls=0&modestbranding=1&mute=1&autoplay=1`;
  }

  return (
    <>
      {videoType === videoTypes.mp4 && (
        <Waypoint
          onEnter={() => {
            videoRef.current.play();
          }}
          onLeave={() => {
            videoRef.current.pause();
          }}
        >
          <video
            style={style}
            ref={videoRef}
            width={imgWidth}
            height={imgHeight}
            autoPlay
            loop
            muted
            playsInline
            controls={controls}
          >
            <source src={src} type="video/mp4" />
          </video>
        </Waypoint>
      )}
      {videoType === videoTypes.youtube && (
        <iframe frameBorder="0" width={width} height={height} src={src} />
      )}
    </>
  );
}
