import React from 'react'
import './home.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react'

function Home({open, opendownload}) {

  const handleclick = () => {
        setTimeout(()=>{
            opendownload(true)
        },100)
  }

  return (
    <div className='homepage'>
     <Header/>
    <div className='mainbox-container'>
         <div className='mainbox'>
             <div className='mainbox-1'>
                   <div>
                       <button>
                          <span class="button_top" onClick={() => open(true)}> Add Download Link </span>
                        </button>
                    </div>         
             </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home