'use client'

import React from 'react'
import TimeAgo from 'react-timeago'
import './TimeAgoFun.css'


const TimeAgoFun = ({createdAt, updatedAt}: {updatedAt: string, createdAt: string}) => {
  return (
    <div className="div-time content-end text-xs
    max-md:flex max-md:flex-col max-md:justify-center max-md:items-center
        max-md:mx-auto max-md:mt-5">
                 <div className="text-gray-400">
                 <span>Edited</span>
                 <TimeAgo date={updatedAt} />
                 </div>
     
                 <div className="text-gray-400">
                 <span>Created</span>
                 <TimeAgo date={createdAt} />
                 </div>
                 </div>
  )
}

export default TimeAgoFun
