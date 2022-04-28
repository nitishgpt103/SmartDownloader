import React from 'react'
import Loader from '../ui/Loader'
import './header.css'
import {useNavigate} from 'react-router-dom'

function Header() {

  const navigate = useNavigate();
  const logout = () => {
      localStorage.removeItem("smartdownname");
      navigate("/")
  }
  return (
    <div className='header'>
            <div className='header--loader'> <Loader/> </div>
            <div className='header--title'><h3>SmartDownloader</h3> <br/> <p>A HighSpeed Multipart Downloader</p> </div>
            <div className='header--gap'></div>     
    </div>
  )
}

export default Header