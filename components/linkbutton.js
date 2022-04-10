import styles from './linkbutton.module.css'

export default function LinkButton({ title, body, src }) {
    
    return (
        <div className={styles.lbContainer}>
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