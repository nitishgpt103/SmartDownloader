import React from 'react'
import "./loader.css"

function Loader() {
  return (
    <div className='logo-container'>
            <div className="loader">
            <div className="rocket">
                <i className="fas fa-rocket"></i>
            </div>
            <span><i></i></span>
            </div>
      </div>
  )
}

export default Loader

// style="--i:3;"
// style="--i:2;"
// style="--i:1;"
// style="--i:0;"