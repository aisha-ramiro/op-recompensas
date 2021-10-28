import React from 'react'
import styles from './.module.css'

export default function ItemList (props) {
    return(
        <div className={styles.boxItem}>
            <div className={styles.boxName}>
                {props.nome}
            </div>
            <div className={styles.characterImage}>
                <img className={styles.image} src={props.img}/>
            </div>
            <div className={styles.boxPrice}>
                {props.price}
            </div>

        </div>
    )
}