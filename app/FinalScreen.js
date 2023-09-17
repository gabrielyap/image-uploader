import React, {useState} from "react"
import { Image } from "cloudinary-react"

export default function FinalScreen(imageUrl){
    return(
        <div className = "w-80 h-80">
        <Image cloudName = "dnyt3b1h3" publicId = {imageUrl}/>
        </div>
    );
}