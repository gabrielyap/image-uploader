"use client"

import React, {useState} from "react"
import Axios from 'axios'
import { Image } from "cloudinary-react"

const UploadScreen = (imageUrl, setImageUrl, setBefore) => {
  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append("file", files[0])
    formData.append("upload_preset", "yismpedw")
    Axios.post("https://api.cloudinary.com/v1_1/dnyt3b1h3/image/upload", formData)
    .then((re) => {
      setImageUrl(re.data.url)
      console.log(re)
      console.log(re.data.url)
    })
    .catch((err) => {
      window.alert("Error: " + err)
    })
  }

  const handleButtonClick = () => {
    document.getElementById('selectedFile').click()
  }

  const dropHandler = (e) => {
    console.log("File(s) dropped");
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ee.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }

  function dragOverHandler(e) {
    console.log("File(s) in drop zone");
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
  }
    return(
      // might not work cuz it starts at main
        <main className="flex min-h-screen flex-col 
    items-center justify-center p-24
    bg-gray-100">
      <div className = "flex flex-col items-center bg-red-100 p-6">
        <h1 className = "font-bold font-poppins text-2xl">Upload your image </h1>
        <h3>File should be Jpeg, Png...</h3>

        <div className = "border-2 border-blue py-6"
          id="drop_zone"
          onDrop= {(event) => {dropHandler(event)}}
          onDragOver={(event) => {dragOverHandler(event)}}>
          <p>Drag & Drop your image here.</p>
        </div>

          <div id = "uploadButton">
            <input type = "file" id = "selectedFile" className = "hidden"
              onChange = {(event) => uploadImage(event.target.files)}
            />
            <input type = "button" value = "Choose a file" 
              className = "bg-blue-500 rounded-full p-3 text-white cursor-pointer" onClick = {() => handleButtonClick()}></input>
          </div> 

          <div className = "w-80 h-80">
            <Image cloudName = "dnyt3b1h3" publicId = {imageUrl}/>
          </div>

      </div>
      
    </main>
    );
}

export default UploadScreen;