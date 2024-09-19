'use client'

import React from 'react'
import TimeAgo from 'react-timeago'
import './TimeAgoFun.css'


const TimeAgoFun = ({createdAt, updatedAt}: {updatedAt: string, createdAt: string}) => {
  return (
    <div className="div-time content-end text-xs">
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
