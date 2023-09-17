import React, {useState} from "react"

export default function LoadingScreen(){
    return(
        <div className="relative h-4 w-full bg-gray-200 rounded">
      <div className="absolute top-0 left-0 h-full bg-blue-500 rounded animate-loading"></div>
    </div>
    );
}