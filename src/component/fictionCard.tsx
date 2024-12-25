'use client'

import { FictionModel } from "../interface"
import InteractiveCard from "./InteractiveCard"
import styles from './card.module.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function FictionCard({fiction,edit,addFiction,removeFiction}:{fiction:FictionModel,edit:boolean,addFiction:Function,removeFiction:Function}) {
    
    return (
        <>
        <InteractiveCard contentName={fiction.title}>
            <div className={styles.container}>
                <img className={styles.image} src={fiction.cover} alt="fiction"/>
                <p className={styles.text}>
                    <div className={styles.title}>{fiction.title}</div>
                    <div className={styles.author}>{fiction.author}</div>
                    <div className={styles.list}><FormatListBulletedIcon/> {fiction.list}</div>
                    <div className={styles.bookmark}><BookmarkIcon/> {fiction.bookmarkDate} / {fiction.bookmarkTime}</div>
                </p>
            </div>
            {
            !edit ? <input type="checkbox" className={styles.checkbox} onChange={(e)=>{e.target.checked ? addFiction(fiction) : removeFiction(fiction)}}/>:""
            }
        </InteractiveCard>
        
        </>
    )
}