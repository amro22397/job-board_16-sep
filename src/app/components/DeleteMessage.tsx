'use client'

import React, { useState } from 'react'
import './DeleteMessage.css'

const DeleteMessage = ({setDeleteMessage} : {
    setDeleteMessage: any
}) => {



  return (
    
    <div className="fixed left-0 right-0 top-[310px] z-50
    bg-white rounded-md h-[125px] w-[500px] border border-gray-800/20
    flex items-center justify-center mx-auto ">
        <div className="flex flex-col items-center justify-center gap-[18px]">

            <h2 className="text-xl font-semibold font-sans">Are you sure you want to delete this job ?</h2>

            <div className="delete-buttons flex gap-4">
                <button>YES</button>

                <button onClick={() => setDeleteMessage(false)}
                >NO</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteMessage
