"use client"

import React, {useState} from "react"
import Axios from 'axios'
import { Image } from "cloudinary-react"

export default function UploadScreen({imageUrl, setImageUrl, setBefore, setLoading, setAfter}) {
  const uploadImage = (files) => {
    setBefore(false)
    setLoading(true)
    const formData = new FormData()
    formData.append("file", files[0])
    formData.append("upload_preset", "yismpedw")
    Axios.post("https://api.cloudinary.com/v1_1/dnyt3b1h3/image/upload", formData)
    .then((re) => {
      setLoading(false)
      setAfter(true)
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
    console.log("e.dataTransfer.files:" + e.dataTransfer.files)
    uploadImage(e.dataTransfer.files)
  }

  function dragOverHandler(e) {
    console.log("File(s) in drop zone");
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
  }
    return(
      // might not work cuz it starts at main
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
    );
}