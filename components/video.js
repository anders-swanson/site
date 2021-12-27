export default function Video({ src, controls, height, width }) {
    const imgWidth = width ? width : "500px"
    const imgHeight = height ? height : "500px"
    return (
        <video
            width={imgWidth}
            height={imgHeight}
            autoPlay
            muted
            controls={controls}
        >
            <source src={src} type="video/mp4"/>
        </video>
    )

}
