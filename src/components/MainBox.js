import React from 'react'
import './mainbox.css'

function MainBox({open, opendownload}) {

  const handleclick = () => {
        setTimeout(()=>{
            opendownload(true)
        },100)
  }
  return (
    <div className='mainbox-container'>
         <div className='mainbox'>
             <div className='mainbox-1'>
                   <div>
                       <button>
                          <span class="button_top" onClick={() => open(true)}> Add Download Link </span>
                        </button>
                    </div>
                   
             </div>
             <div className='mainbox-2'>
                  <table>
                      <tr className='table-head'> <th>S No.</th> <th style={{textAlign:"left", paddingLeft:"0.8rem"}}>File Name</th> <th>Size</th> <th>Parts</th></tr>
                      <tr onClick={() => handleclick()}> <td>1.</td> <td>Undercover.mp3</td> <td>12mb</td> <td>3</td></tr>
                      <tr onClick={() => handleclick()}> <td>2.</td><td>SpiderMan_2022.mk4</td> <td>1.3gb</td> <td>6</td> </tr>
                      <tr onClick={() => handleclick()}> <td>3.</td> <td>Gangs of Wasseypur.mkv</td> <td>3gb</td> <td>2</td> </tr>
                      <tr onClick={() => handleclick()}> <td>4.</td> <td>WindowsOS.exe</td> <td>11gb</td> <td>15</td> </tr>
                      <tr onClick={() => handleclick()}> <td>5.</td> <td>Undercover.mp3</td> <td>12mb</td> <td>3</td> </tr>
                      <tr onClick={() => handleclick()}> <td>6.</td> <td>SpiderMan_2022.mk4</td> <td>1.3gb</td> <td>6</td> </tr>
                      <tr onClick={() => handleclick()}> <td>7.</td> <td>Gangs of Wasseypur.mkv</td> <td>3gb</td> <td>2</td> </tr>
                      <tr onClick={() => handleclick()}> <td>8.</td> <td>WindowsOS.exe</td> <td>11gb</td> <td>15</td> </tr>
                  </table>
             </div>
        </div>
    </div>
  )
}

export default MainBox