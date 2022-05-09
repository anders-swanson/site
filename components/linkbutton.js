import styles from './linkbutton.module.css'

export default function LinkButton({ title, body, src, animation }) {
    return (
        <div className={animation ? `${styles.lbContainer} ${animation}` : styles.lbContainer}>
            <div className={styles.lbItem}>
                {title}
                <p className={styles.lbBody}>{body}</p>
            </div>
            <a
                href={src}
                target="_blank"
                rel="noreferrer"
            />
        </div>

    )
}
