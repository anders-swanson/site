import { useEffect, useRef } from "react";

const videoTypes = {
  youtube: "youtube",
  mp4: "mp4",
};

// Only play the video when it is in the viewport.
// The video will be paused when it is not in the viewport
export default function Video({ src, height, width, controls, style, poster="/cover.png" }) {
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

  // use the scroll effect
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  let onScroll = function checkScroll() {
    const fraction = 0.8; // Play when 80% of the player is visible.
    let video = videoRef.current;
    let right = video.offsetLeft + video.offsetWidth;
    let bottom = video.offsetTop + video.offsetHeight;
    let visibleX = Math.max(
      0,
      Math.min(
        video.offsetWidth,
        window.pageXOffset + window.innerWidth - video.offsetLeft,
        right - window.pageXOffset
      )
    );
    let visibleY = Math.max(
      0,
      Math.min(
        video.offsetHeight,
        window.pageYOffset + window.innerHeight - video.offsetTop,
        bottom - window.pageYOffset
      )
    );
    let visible =
      (visibleX * visibleY) / (video.offsetWidth * video.offsetHeight);
    if (visible > fraction) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <>
      {videoType === videoTypes.mp4 && (
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
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {videoType === videoTypes.youtube && (
        <iframe frameBorder="0" width={width} height={height} src={src} />
      )}
    </>
  );
}
