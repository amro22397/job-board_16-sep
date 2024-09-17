import React from 'react'

const JobRow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute top-2 right-4">
        <i className="fa-regular fa-heart"></i>
        </div>
        <div className="flex grow gap-4">

        <div className="content-center">
            <img src="" alt="" className="size-12" />
        </div>

        <div className="grow md:flex">
            <div className="grow">
            <div className="text-gray-500 text-sm">institution</div>
            <div className="font-bold text-lg mb-1">job</div>
            <div className="text-gray-400 text-sm">
                type of job - place
            </div>
            </div>
            
        </div>

        </div>

        <div className="content-end text-gray-400 text-sm">
            2 weeks ago
        </div>
    </div>

  )
}

export default JobRow
