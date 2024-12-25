'use client'

import React from 'react'
import styles from './card.module.css'

export default function InteractiveCard({children, contentName}:{children:React.ReactNode, contentName:string}) {
    // function handleOnClick(){
    //     alert(`${contentName} is not ready`)
    // }

    function handleOnMouseOver(event:React.SyntheticEvent){
        if (event.type == "mouseover"){
            event.currentTarget.className = styles.hover
        }
        else{
            event.currentTarget.className = styles.card
        }
    }

    return (
        <div className={styles.card} onMouseOver={(e)=>handleOnMouseOver(e)} 
        onMouseOut={(e)=>handleOnMouseOver(e)}>
            {children}
        </div>
    )
}