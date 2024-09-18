'use client'

import React from 'react'
import TimeAgo from 'react-timeago'


const TimeAgoFun = ({createdAt, updatedAt}: {updatedAt: string, createdAt: string}) => {
  return (
    <div className="content-end text-xs">
                 <div className="text-gray-400 flex justify-between w-[110px]">
                 <span>Edited : </span>
                 <TimeAgo date={updatedAt} />
                 </div>
     
                 <div className="text-gray-400 flex justify-between w-[110px]">
                 <span>Created : </span>
                 <TimeAgo date={createdAt} />
                 </div>
                 </div>
  )
}

export default TimeAgoFun
