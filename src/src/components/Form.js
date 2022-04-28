import React from 'react'
import { TextField } from '@mui/material'
import './form.css'
import { useState } from 'react';

function Form({open, opendownload}) {

   const username = localStorage.getItem("smartdownname")
   const [filelink , setfilelink] = useState("");
   const [filepart , setfilepart] = useState("");
   const [filename , setfilename] = useState("");
   const [filetype , setfiletype] = useState("");

   function get_url_extension( url ) {
      return url?.split(/[#?]/)[0].split('.').pop().trim();
    }
    function fileNameFromUrl(url) {
        var matches = url?.match(/\/([^\/?#]+)[^\/]*$/);
        if (matches?.length > 1) {
            return matches[1].split(".")[0];
        }
        return null;
    }

    var totalsize = 0;
    async function getSize(link){
      var http = new XMLHttpRequest();
      http.responseType = 'blob';
      var precise = 0;
      
      http.open('GET', link, true); // true = Asynchronous
      http.setRequestHeader('Range', 'bytes=0-'); 
      //console.log("Inserting file link completed. Now download and merge.");
      http.send();
      http.onreadystatechange = function() {
          if(this.readyState === this.HEADERS_RECEIVED) {
                  totalsize = this.getResponseHeader('content-length');
                  if(totalsize !== 0){
                     localStorage.setItem( "smartsize", totalsize);
                      http.abort();
                  }
            }    
         };
      
    }

  const handleClick = async () => {
   const datasize = await getSize(filelink);
   console.log(totalsize + " " + filelink);
      if(filelink === "" || isNaN(filepart) || parseInt(filepart) <= 0 || filepart === ""){
            window.alert("There is some problem with the provided data. Please recheck it") 
            return;
      }
     // e.preventDefault();
      console.log(filepart);
      
      let type = filetype;

      if(type == ""){
         type = get_url_extension(filelink);
      }
      let name = filename;
      if(name === "" || name == null){
         name = fileNameFromUrl(filelink);
      }
      if(name === "" || name == null){
         name ="download";
      }
   localStorage.setItem( "smartlink", filelink);
   
   localStorage.setItem( "smartpart", filepart);
   localStorage.setItem( "smartfilename", name+'.'+type);
     setTimeout(()=>{
        open(false);
        opendownload(true);
     },150)
  }

  
  return (
    <div className='form-container'>
          <div className='form-box card-1'>
          <div className='close-btn'><i class="far fa-times-circle" onClick={() => open(false)}></i></div>
              <table>
                  <tr> <td>Enter Download URL : </td> <td colSpan={2}> <TextField onChange={(e)=>setfilelink(e.target.value)} fullWidth outlined label="URL" id="fullWidth"/> </td> </tr>
                  <tr> <td>Number Of Parts To Create</td> <td colSpan={2}> <TextField onChange={(e)=>setfilepart(e.target.value)} fullWidth  outlined label="Parts" id="fullWidth" />  </td> </tr>
                  <tr> <td>File Name (Optional)</td> <td colSpan={2}> <TextField onChange={(e)=>setfilename(e.target.value)} fullWidth outlined label="File Name"  id="fullWidth" />  </td> </tr>
                  <tr> <td>File Extension (Optional)</td> <td colSpan={2}> <TextField onChange={(e)=>setfiletype(e.target.value)} fullWidth outlined label="File Extension" id="fullWidth" />  </td> </tr>
                  <tr> <td colSpan={3} style={{paddingTop:"2rem"}}> <button class="cssbuttons-io-button" onClick={() => handleClick()}>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                           <span>Add</span>
                           </button>     
                        </td>
                   </tr>
              </table>
          </div>
    </div>
  )
}

export default Form