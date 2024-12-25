'use client'

import { useState,useEffect } from "react"
import { MobileStepper } from "@mui/material"
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { createTheme} from '@mui/material/styles';
import styles from './banner.module.css'

export default function Banner(){
    const covers =["/img/cover1.png","/img/cover2.png","/img/cover3.png"]
    const [index,setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => { 
            setIndex( previous => {
                if (previous === covers.length) {
                   return 0;
                } else {
                   return previous+1;
                } 
   
            }) }, 3000)
        return () => clearInterval(interval)
    },[])
    const theme = createTheme({
        palette: {
          background: {
            paper: '#fff',
          },
          text: {
            primary: '#FFA500',
            secondary: '#46505A',
          },
          action: {
            active: '#001E3C',
          },
        },
      });

    return(
        <div >
            <img className={styles.leftBanner} src={covers[(index-1+covers.length)%covers.length]}
            alt = "cover" onClick={()=>setIndex(index+1)}/>
            <img className={styles.banner} src={covers[index%covers.length]}
            alt = "cover" onClick={()=>setIndex(index+1)}/>
            <img className={styles.rightBanner} src={covers[(index+1+covers.length)%covers.length]}
            alt = "cover" onClick={()=>setIndex(index+1)}/>
            <span className={styles.stepper}>
            <MobileStepper
                variant="dots"
                steps={covers.length}
                position="static"
                activeStep={index%3}
                sx={{ 
                    '.MuiMobileStepper-dotActive': {
                        backgroundColor: '#FFA500', 
                    }
                }}
                nextButton={
                    <Button sx={{
                        color: '#FFA500',
                    }} 
                    size="small" onClick={() => setIndex(index+1)} >
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                    </Button>
                }
                backButton={
                    <Button sx={{
                        color: '#FFA500',
                    }} size="small" onClick={() => setIndex(index+1)} >
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    </Button>
                }
                />
            </span>
        </div>
    )
}     