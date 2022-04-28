import React from 'react'
import './box.css'
import { Tabs, Tab } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MergeIcon from '@mui/icons-material/Merge';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Download from './Download';
import Merge from './Merge';

function Box({opendownload}) {

    const [index, setIndex] = useState(0);

    const handleChange = (event, newValue) => {
      //console.log(newValue);
      setIndex(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setIndex(index)
    };


    
  return (
    <div className='box-wrapper'>
      <div className='box-container'>
      <div className='close-btn' style={{zIndex:"10"}}><i class="far fa-times-circle" onClick={() => opendownload(false)}></i></div>
        <Tabs value={index} onChange={handleChange} aria-label="icon label tabs example" centered="true" style={{display:"flex",margin:"0",padding:"0",width:"100%"}}>
        <Tab icon={<CloudDownloadIcon />} label="Download a File" style={{fontSize:"1rem",flex:"6", backgroundColor:`${index===0 ? "#EEEEEE" : "white"}`}}/>
        <Tab icon={<MergeIcon/>} label="Merge Files" style={{fontSize:"1rem", flex:"6",backgroundColor:`${index===1 ? "#EEEEEE" : "white"}`}}/>
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>  
            <Download/> 
            <Merge/>
        </SwipeableViews>
     </div>
 </div>
  )
}

export default Box