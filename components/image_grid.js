import Image from 'next/image'
import Link from 'next/link'
import styles from './image_grid.module.css'

export default function ImageGrid({ backgroundImage, title, items, opacity, imageWidth, imageHeight }) {
    opacity = opacity ? opacity : 0.1
    imageWidth = imageWidth ? imageWidth : 380
    imageHeight = imageHeight ? imageHeight : 500

    return (
        <div
            className={styles.container}
            style={{
                'backgroundImage': `url(${backgroundImage}), linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity}))`,
            }}
        >
            <h1
                className={styles.page_header}
            >
                {title}
            </h1>
            <div
                className={styles.grid_container}
            >
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={styles.grid_item}
                    >
                        <div 
                            className={styles.grid_image}
                            style={{
                                'maxWidth': imageWidth,
                                'maxHeight': imageHeight,
                            }}
                        >
                            <Link href={item.link}>
                                <a target="_blank">
                                    <Image
                                        alt={idx}
                                        src={item.image}
                                        width={imageWidth}
                                        height={imageHeight}
                                    />
                                </a>
                            </Link>
                            
                        </div>

                        {item.text}
                    </div>
                ))} 
            </div>
        </div>
    )
}