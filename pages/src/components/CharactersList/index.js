import React from "react"
import Title from '../Title'
import ItemList from '../ItemList'
import styles from './.module.css'

export default function CharactersList () {
    return(
        <div>
            <Title />
            
            <div className={styles.list}>
                <ItemList 
                nome="Monkey D. Luffy"
                img="img/luffy.png"
                price="1,500,000,000"
                />
                <ItemList 
                nome="Roronoa Zoro"
                img="img/zoro.jpg"
                price="320,000,000"
                />
                <ItemList 
                nome="Nami"
                img="img/nami.png"
                price="66,000,000"
                />
                <ItemList 
                nome="God Usopp"
                img="img/usopp.jpg"
                price="200,000,000"
                />
                <ItemList 
                nome="Chopper"
                img="img/chopper.jpg"
                price="100"
                />
                <ItemList 
                nome="Nico Robin"
                img="img/robin.png"
                price="130,000,000"
                />
                <ItemList 
                nome="Franky"
                img="img/franky.jpg"
                price="94,000,000"
                />
                <ItemList 
                nome="Vinsmoke Sanji"
                img="img/sanji.jpg"
                price="330,000,000"
                />
                <ItemList 
                nome="Brook"
                img="img/brook.jpg"
                price="33,000,000"
                />
                <ItemList 
                nome="Jinbe"
                img="img/jinbe.jpg"
                price="400,000,000"
                />
            </div>
        </div>
        
    )
}