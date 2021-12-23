import styles from './search.module.css'

export default function Search({search, setSearch}) {
    return (
        <input
            className={styles.searchBox}
            type="text"
            placeholder=" 🔎︎"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> 
    )
}
