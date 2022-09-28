import { backgroundImageStyle } from '../lib/common'
import styles from './image_grid.module.css'

export default function HeaderText({ children, backgroundImage, opacity }) {
    return (
        <>
        <br/>
        <div 
            className={styles.container}
            style={{
                'marginTop': '2px',
                ...backgroundImageStyle(backgroundImage, opacity)
            }}
        >
            {children}
        </div>
        </>
    )

}