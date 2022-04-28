import React, { useEffect } from 'react'
import './download.css'
import Config from './Config'
import { useState } from 'react';

function Download() {

  const [start, setStart] = useState(false);
  const [val, setVal] = useState(0);

  function get_url_extension( url ) {
    return url?.split(/[#?]/)[0].split('.').pop().trim();
  }

 function sendPartialRequest(){
   
  const imageUrl = localStorage.getItem("smartlink");
  var partToDownload= localStorage.getItem("smartparttodownload");
  var startTime = new Date().getTime();
  var ext = get_url_extension(imageUrl);
  const noOfParts = parseInt(localStorage.getItem("smartpart"));
  var totalsize = parseInt(localStorage.getItem("smartsize"));
  var nameoffile = localStorage.getItem("smartfilename");
  var downloadspeedText = document.getElementById("speed");
  var timeleft = document.getElementById("timeleft");
  var progressText = document.getElementById("downloaded");
  
  const nameoffilearr = nameoffile.split('.');
  
  var range = '';
  if(partToDownload === noOfParts){
      range = "bytes=" + Math.floor((totalsize/noOfParts)*(noOfParts - 1)) + "-";
  }else if(partToDownload === 1){
      range = "bytes=" +Math.floor(((totalsize/noOfParts)*(partToDownload-1) )) + "-" + Math.floor((totalsize/noOfParts)*(partToDownload) - 1);
  }else{
      range = "bytes=" + Math.floor((totalsize/noOfParts)*(partToDownload-1) ) + "-" + Math.floor((totalsize/noOfParts)*(partToDownload) - 1);
  }

 if(partToDownload.length === 1){
  partToDownload = "0" + partToDownload;          
  }
  var http = new XMLHttpRequest();
  http.responseType = 'blob';
  console.log("File type: " + ext)
  http.open('GET', imageUrl, true); // true = Asynchronous
  http.setRequestHeader('Range', range); 
  http.onreadystatechange = function() {
        if (this.readyState === 4) {
              var a = document.createElement("a");
              a.href = window.URL.createObjectURL(http.response , {type: "application/zip"});
              a.download = (nameoffilearr[0] + partToDownload + ('.' + nameoffilearr[1]));
              a.click();
              setStart(false);
        }    
     };
     http.onprogress = function(e) {
          var percent_complete = (e.loaded / e.total) * 100;
          setVal(percent_complete);
          progressText.innerHTML = Math.floor(percent_complete) + "%";
          var duration = ( new Date().getTime() - startTime ) / 1000;
          var bps = e.loaded / duration;
          var kbps = bps / 1024;
          kbps = Math.floor(kbps);
          var time = (e.total - e.loaded)/ bps;
          var seconds = time % 60;
          seconds = Math.round(seconds);
          var minutes = time/60;
          minutes = Math.round(minutes);
          downloadspeedText.innerHTML = kbps + " KB/s";
          timeleft.innerHTML =  minutes + " minutes and " +seconds+" seconds remaining...";
      };
  http.send();    
}



useEffect(()=>{
  console.log(start);
  if(start){
    sendPartialRequest();
  }
},[start])

  return (
    <div className='download-container'>
    {start ?   <div>
        <table>
            <tr> <td>File Name </td><td>{localStorage.getItem("smartfilename")}</td></tr>
            <tr> <td>File Size </td><td>{(localStorage.getItem("smartsize")/(1024*1024)).toFixed(2)} MB</td></tr>
            <tr> <td>File Part</td> <td>{localStorage.getItem("smartparttodownload")} of {localStorage.getItem("smartpart")}</td> </tr>
            <tr> <td>Status</td> <td>Downloading...</td> </tr>
            <tr> <td>Part Size</td> <td>{(parseInt(localStorage.getItem("smartsize"))/(1024*1024*(parseInt(localStorage.getItem("smartpart"))))).toFixed(2)} Mb</td> </tr>
            <tr> <td>Downloaded</td> <td id="downloaded"></td> </tr>
            <tr> <td>Transfer Rate</td> <td id="speed"> </td> </tr>
            <tr> <td>Time Left</td> <td id="timeleft"></td> </tr>
        </table>
        <div class="meter animate">
            <span style={{width: `${val}%`}} id= "progress"><span></span></span>
       </div>
    </div> :
    <Config start={setStart}/>
   }
</div>
  )
}

export default Download