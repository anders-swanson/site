import { backgroundImageStyle } from '../lib/common'
import styles from './image_grid.module.css'

export default function HeaderText({ children, backgroundImage, opacity }) {
    return (
        <div 
            className={styles.container}
            style={backgroundImageStyle(backgroundImage, opacity)}
        >
            {children}
        </div>
    )

}