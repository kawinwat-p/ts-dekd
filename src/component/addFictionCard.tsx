import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FictionCard from './fictionCard';
import { FictionModel } from '../interface';
import styles from './card.module.css';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function AddFiction({addAddFiction, removeAddFiction, clearAddFiction, addAllFictions, allFictions,setEdit}:{addAddFiction:Function, removeAddFiction:Function, clearAddFiction:Function, addAllFictions:Function, allFictions:FictionModel[], setEdit:Function}) {
    const [open, setOpen] = useState(false);
    const add = false;

    return <>
    <button className={styles.cancel} onClick={()=>{setOpen(true); clearAddFiction()}}><AddIcon/></button>
    <Dialog
      open={open}
      onClose={() => {setOpen(false)}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
        borderRadius: "40px",
        width: "100%",
        maxWidth: "90%",
        height: "100%",
        maxHeight: "85%",
        padding: "20px",
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <div className={styles.popupTitle}>กรุณาเลือกนิยายที่ต้องการเพิ่ม</div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <div className={styles.catalog}>
                {
                    allFictions.map((fiction:FictionModel)=>(
                        <FictionCard fiction={fiction} edit={add} 
                        addFiction={addAddFiction} removeFiction={removeAddFiction}/>
                    ))
                  }    
        </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button className={styles.cancel} onClick={() => {setOpen(false); clearAddFiction(); setEdit(true)}}>ยกเลิก</button>
        <button className={styles.add} onClick={() => {setOpen(false); addAllFictions(); setEdit(true)}} autoFocus>
          เพิ่ม
        </button>
      </DialogActions>
    </Dialog>
  </>
}
