import React from 'react'
import './landing.css'
import Loader from '../../ui/Loader'
import Footer from '../../components/Footer'
import Waves from '../../ui/Waves'
import { auth, provider } from '../../fire/firebaseConfig'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MainBox from '../../components/MainBox';
import { useState } from 'react'
import Home from '../homepage/Home'

function Landing({open, opendownload}) {

    let navigate = useNavigate();
   
    let username = localStorage.getItem("smartdownname");
    

    const login = (e)=>{
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then(async (result) => {

        const user = result.user;
        const reguser = user.email.split("@");

        console.log(user);

        try {
            localStorage.setItem("smartdownname", reguser[0]);
            localStorage.setItem("smartdownimage",user?.photoURL)
            navigate("/home");
        } catch (e) {
            console.error("Error occured");
        }

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorCode + " " + errorMessage + " for " + email )
    });
    }



  if(username != null) return <Home open={open} opendownload={opendownload}></Home>
  return (
    <div className='landing'>
        <div className='landing-header'>
            <div className='landing-header--loader'> <Loader/> </div>
            <div className='landing-header--title'><h3>SmartDownloader</h3> <br/> <p>A HighSpeed Multipart Downloader</p> </div>
        </div>
        <div className='landing-content'>
            <div className='landing-content--left'>
                <div className='hidden'>
                    <div className='hidden-box'>
                        <div> <i class="fa-solid fa-circle-check" style={{color:"green"}}></i> <span>FREE</span> </div>
                        <div> <i class="fa-solid fa-lock" style={{color:"black"}}></i> <span>SECURE</span></div>
                        <div> <i class="fa-solid fa-bolt" style={{color:"#FF5F00"}}></i> <span>FAST</span></div>
                    </div>    
                </div>
                <div style={{marginTop:"2rem"}}> Bringing to you, the first Multi Device Downloader !</div>
                <div className='landing-button'>
                    <button onClick={(e) => login(e)}>
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                        <span>Launch</span>
                    </button>
                </div>
            </div>
             
            <div className='landing-content--right'>
                <img src="images/home.jpg"></img>
            </div>
        </div>
        <Waves/>
    </div>
  )
}

export default Landing