import React, {useState} from "react"
import { Image } from "cloudinary-react"

export default function FinalScreen({imageUrl}){
    return(
        <div className = "bg-red p-6 rounded-md shadow-md w-64">
            <Image cloudName = "dnyt3b1h3" publicId = {imageUrl}/>
        </div>
        
    );
}