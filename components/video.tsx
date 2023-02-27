import { useEffect, useRef } from "react";

const videoTypes = {
  youtube: "youtube",
  mp4: "mp4",
};

// Only play the video when it is in the viewport.
// The video will be paused when it is not in the viewport
export default function Video({
  src,
  height = 500,
  width = 500,
  controls,
  style,
  poster = "/cover.png",
}) {
  const videoRef = useRef(null);

  let videoType = videoTypes.mp4;
  if (src.includes("youtube.com")) {
    videoType = videoTypes.youtube;
    const paths = src.split("/");
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

  const onScroll = function checkScroll() {
    const fraction = 0.8; // Play when 80% of the player is visible.
    const video = videoRef.current;
    const right = video.offsetLeft + video.offsetWidth;
    const bottom = video.offsetTop + video.offsetHeight;
    const visibleX = Math.max(
      0,
      Math.min(
        video.offsetWidth,
        window.pageXOffset + window.innerWidth - video.offsetLeft,
        right - window.pageXOffset
      )
    );
    const visibleY = Math.max(
      0,
      Math.min(
        video.offsetHeight,
        window.pageYOffset + window.innerHeight - video.offsetTop,
        bottom - window.pageYOffset
      )
    );
    const visible =
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
          width={width}
          height={height}
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
        <iframe
          width={width}
          height={height}
          src={src}
          style={{
            border: "0px",
          }}
        />
      )}
    </>
  );
}
