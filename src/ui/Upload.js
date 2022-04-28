import React, { useState } from 'react'
import './upload.css'

function Upload() {

   
   const [files, setFiles]  = useState([]);
   const [fnames, setFnames] = useState([])
   const uploadFiles = (event) => {
        let files = event.target.files;
        let arr = [];
        for(var i=0; i<files.length;i++)
        {
            console.log(files[i].name);
            arr.push(files[i].name)
        }
        setFnames(arr)
        setFiles(files)
      
   }


   var MyBlobBuilder = function() {
    this.parts = [];
  }

  MyBlobBuilder.prototype.append = function(part) {
    this.parts.push(part);
    this.blob = undefined; // Invalidate the blob
   };

  MyBlobBuilder.prototype.getBlob = function() {
    if (!this.blob) {
        this.blob = new Blob(this.parts, { type: "application/zip" });
    }
    return this.blob;
   };


  const mergeFiles = () => {
    var nameoffile = localStorage.getItem("smartfilename");
      if(!nameoffile){
          alert("Please insert file link and click on send break request. Then click on merge.")
          return;
      }
      //var fi = document.querySelector("#files-uploader");
      var fisorted = Array.from(files);
      fisorted.sort(function (a, b) {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
      var myBlobBuilder = new MyBlobBuilder();
      console.log(fisorted);
      for (var i = files.length - 1; i >= 0; i--) {
        myBlobBuilder.append(fisorted[i]);
      }
      var bb = myBlobBuilder.getBlob();
    
      var a = document.createElement("a");
      a.href = window.URL.createObjectURL(bb, { type: "application/zip" });
      a.download = nameoffile;
      a.click();
    }
  

  return (
    <div className="upload">
        <div className="upload-files">
        <header>
        <p>
            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
            <span className="up">up</span>
            <span className="load">load</span>
        </p>
        </header>
        <div className="body" id="drop">
        <i className="fa fa-file-text-o pointer-none" aria-hidden="true"></i>
        <p className="pointer-none">
            <label for="files-uploader">
                <b className='upload-btn'>Choose</b> 
            </label>
            files here
        </p>
        <input type="file" multiple="multiple" id='files-uploader' onChange={uploadFiles} style={{display:"none"}}/>
        </div>
        <div className="list-files">
             <ul>
                 { fnames.map(file => <li>{file} &nbsp; <i className="fa-solid fa-circle-check" style={{color:"#4db6ac"}}></i></li> ) }
             </ul>
        </div>
        </div>
        <p className='pointer-none merge-btn'> <button onClick={() => mergeFiles()}>Merge</button> </p> 
    </div>

  )
}

export default Upload