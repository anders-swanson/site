import Image from 'next/image'
import styles from './search.module.css'

export default function Search({search, setSearch}) {
    return (
        <>
            <img
                alt='spyglass'
                className={styles.spyglass}
                src='/search.svg'
            />
            <input
                className={styles.searchBox}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            /> 
        </>

    )
}
