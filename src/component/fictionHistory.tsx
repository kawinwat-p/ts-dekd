'use client'

import FictionCard from "./fictionCard.tsx"
import styles from './card.module.css'
import { useState } from 'react'
import { FictionModel } from "../interface.ts"
import DeleteIcon from '@mui/icons-material/Delete';
import AddFiction from "./addFictionCard.tsx"


export default function FictionHistory() {    
    const [fictions , setFictions] = useState<FictionModel[]>([{
        id: 1,
        title: 'เกิดใหม่ทั้งทีก็เป็นสาววายไปซะแล้ว',
        cover: '/img/card.png',
        author: 'SaoY',
        list:"ตอนที่ 18: เรือผี",
        bookmarkDate: "9 ก.ค. 63",
        bookmarkTime: "10.00",
      },{
        id: 2,
        title: 'โปรแกรมเมอร์ตัวร้ายกับนายปากแซ่บ',
        cover: '/img/card.png',
        author: 'Eiei5678',
        list:"ตอนที่ 5: นั่น",
        bookmarkDate: "3 ก.ค. 63",
        bookmarkTime: "10.01",
      },{
        id: 4,
        title: 'ทะลุมิติมาเป็นสาววาย',
        cover: '/img/card.png',
        author: 'SaoY',
        list:"ตอนที่ 12: ...",
        bookmarkDate: "3 ก.ค. 63",
        bookmarkTime: "10.02",
      },{
        id: 5,
        title: '(อ่านฟรีทุกวัน) ไลฟ์สดขายของ',
        cover: '/img/card.png',
        author: 'Haidilao',
        list:"ตอนที่ 16: เปิดกล้อง",
        bookmarkDate: "3 ก.ค. 63",
        bookmarkTime: "10.02",
      },{
        id: 3,
        title: 'ไหตี้เหลา',
        cover: '/img/card.png',
        author: 'Haidilao',
        list:"ตอนที่ 19: หมาล่า",
        bookmarkDate: "3 ก.ค. 63",
        bookmarkTime: "10.02",
      },{
        id: 3,
        title: 'ไหตี้เหลา',
        cover: '/img/card.png',
        author: 'Haidilao',
        list:"ตอนที่ 19: หมาล่า",
        bookmarkDate: "3 ก.ค. 63",
        bookmarkTime: "10.02",
      },{
        id: 3,
        title: 'ไหตี้เหลา',
        cover: '/img/card.png',
        author: 'Haidilao',
        list:"ตอนที่ 19: หมาล่า",
        bookmarkDate: "3 ก.ค. 63",
        bookmarkTime: "10.02",
      },{
        id: 3,
        title: 'ไหตี้เหลา',
        cover: '/img/card.png',
        author: 'Haidilao',
        list:"ตอนที่ 19: หมาล่า",
        bookmarkDate: "3 ก.ค. 63",
        bookmarkTime: "10.02",
      },{
          id: 4,
          title: 'ไหตี้เหลา',
          cover: '/img/card.png',
          author: 'Haidilao',
          list:"ตอนที่ 19: หมาล่า",
          bookmarkDate: "3 ก.ค. 63",
          bookmarkTime: "10.02",
      }])
      const [allFictions , setAllFictions] = useState<FictionModel[]>([{
        id: 10,
        title: 'นิยาย10',
        cover: '/img/card.png',
        author: 'SaoY',
        list:"ตอนที่ 100: ยังไม่แต่ง",
        bookmarkDate: "9 ก.ค. 63",
        bookmarkTime: "10.00",
        },{
        id: 11,
        title: 'นิยาย11',
        cover: '/img/card.png',
        author: 'SaoY',
        list:"ตอนที่ 100: ยังไม่แต่ง",
        bookmarkDate: "9 ก.ค. 63",
        bookmarkTime: "10.00",
        },{
        id: 12,
        title: 'นิยาย12',
        cover: '/img/card.png',
        author: 'SaoY',
        list:"ตอนที่ 100: ยังไม่แต่ง",
        bookmarkDate: "9 ก.ค. 63",
        bookmarkTime: "10.00",
        },{
        id: 13,
        title: 'นิยาย13',
        cover: '/img/card.png',
        author: 'SaoY',
        list:"ตอนที่ 100: ยังไม่แต่ง",
        bookmarkDate: "9 ก.ค. 63",
        bookmarkTime: "10.00",
        },{
        id: 14,
        title: 'นิยาย14',
        cover: '/img/card.png',
        author: 'SaoY',
        list:"ตอนที่ 100: ยังไม่แต่ง",
        bookmarkDate: "9 ก.ค. 63",
        bookmarkTime: "10.00",
      },]);
    // var fictions : FictionModel[] = []
    const [edit,setEdit] = useState(true)
    function deleteFiction(){
        for (let i = 0; i < deleteFictions.length; i++) {
            const index = fictions.indexOf(deleteFictions[i])
            fictions.splice(index,1)
            allFictions.push(deleteFictions[i])
        }
        setAllFictions(allFictions)
        setFictions(fictions)
        clearDeleteFiction()
    }
    const [deleteFictions,setDeleteFictions] = useState<FictionModel[]>([])
    const [deleteCount,setDeleteCount] = useState(0)
    function addDeleteFiction(fiction : FictionModel){
        deleteFictions.push(fiction)
        setDeleteFictions(deleteFictions)
        setDeleteCount(deleteFictions.length)
    }
    function removeDeleteFiction(fiction : FictionModel){
        const index = deleteFictions.indexOf(fiction)
        deleteFictions.splice(index,1)
        setDeleteFictions(deleteFictions)
        setDeleteCount(deleteFictions.length)
    }
    function clearDeleteFiction(){
        setDeleteFictions([])
        setDeleteCount(0)
    }

    const [addFictions , setAddFictions] = useState<FictionModel[]>([])
    function addAddFiction(fiction : FictionModel){
        addFictions.push(fiction)
        setAddFictions(addFictions)
    }
    function removeAddFiction(fiction : FictionModel){
        const index = addFictions.indexOf(fiction)
        addFictions.splice(index,1)
        setAddFictions(addFictions)
    }
    function clearAddFiction(){
      setAddFictions([])
    }
    function addAllFictions(){
        for (let i = 0; i < addFictions.length; i++) {
            fictions.push(addFictions[i])
            const index = allFictions.indexOf(addFictions[i])
            allFictions.splice(index,1)
        }
        setAllFictions(allFictions)
        setFictions(fictions)
        clearAddFiction()
    }

    return (
        <div>
            <h1 className={styles.fiction}>รายการที่คั่นไว้</h1>
            <hr className={styles.line}/>
            {edit ? (
                <button className={styles.edit} onClick={()=>setEdit(false)}>
                แก้ไข
                </button>
            ) : <><button className={styles.edit} onClick={()=>{setEdit(true); deleteFiction(); }}><DeleteIcon/> {deleteCount}</button>
            <AddFiction addAddFiction={addAddFiction} removeAddFiction={removeAddFiction} clearAddFiction={clearAddFiction} addAllFictions={addAllFictions} allFictions={allFictions} setEdit={setEdit}/>
            <button className={styles.cancel} onClick={()=>{setEdit(true); clearDeleteFiction();}}>ยกเลิก</button></>}

            <div className={styles.count}>
                จำนวนทั้งหมด {fictions.length} รายการ
                </div>
            
            <div className={styles.catalog}>
                {
                    fictions.map((fiction:FictionModel)=>(
                        <FictionCard fiction={fiction} edit={edit} 
                        addFiction={addDeleteFiction} removeFiction={removeDeleteFiction}/>
                    ))
                  }    
            </div>
        </div>

    )
}