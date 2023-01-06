import utilStyles from '../styles/utils.module.css'

export default function MapEmbed({ height, width, query, lat, long }) {
    height = height ? height : 400
    width = width ? width : 650

    let url = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${query}`
    
    return (
        <div className={utilStyles.centered}>
            <iframe
                width={width}
                height={height}
                style={{
                    "border": "0",
                }}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src={url}
            />
        </div>
    )
}