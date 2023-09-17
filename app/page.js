"use client"

import React, {useState} from "react"
import Axios from 'axios'
import { Image } from "cloudinary-react"
import UploadScreen from "./UploadScreen"

export default function Home() {
  const [imageUrl, setImageUrl] = useState('')
  const [before, setBefore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [after, setAfter] = useState(false);

  return (
    <main className="flex min-h-screen flex-col 
    items-center justify-center p-24
    bg-gray-100">

      {before && <UploadScreen imageUrl = {imageUrl} setImageUrl = {setImageUrl} setBefore={setBefore} setLoading={setLoading} setAfter ={setAfter}/>}
      
      {loading && <>NOW LOADING</>}

    </main>
      

  )
}
