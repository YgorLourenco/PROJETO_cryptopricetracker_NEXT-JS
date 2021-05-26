import React from 'react'
import styles from './Search.module.css'

const SearchBar = ({...rest}) => {

    // {...rest} e para tratar os valores inseridos de forma individual
    return (
        <div className={styles.coin_search}>
            <input className={styles.coin_input} {...rest}/>
        </div>
    )
}

export default SearchBar
