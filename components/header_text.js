import { backgroundImageStyle } from '../lib/common'
import utilStyles from '../styles/utils.module.css'

export default function HeaderText({ children, backgroundImage, opacity, styles }) {
    const s = {
        ...styles,
        'marginTop': '2px',
        ...backgroundImageStyle(backgroundImage, opacity)
    }
    return (
        <>
        <br/>
        <div 
            className={utilStyles.coverContainer}
            style={s}
        >
            {children}
        </div>
        </>
    )

}