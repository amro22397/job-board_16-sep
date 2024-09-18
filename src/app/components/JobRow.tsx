
import React from 'react'
import TimeAgoFun from './TimeAgoFun'
import { job } from '@/models/Job'
import Link from 'next/link'


const JobRow = async ({jobDoc}: {jobDoc: job}) => {

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm relative">


        <div className="absolute top-2 right-4">
        <i className="fa-regular fa-heart"></i>
        </div>
        <div className="flex grow gap-4">

        <div className="content-center">
            <img src={jobDoc.JobIcon} alt="image" className="size-12" />
        </div>

        <div className="grow md:flex">
          <div className="grow">
            <div className="text-gray-500 text-sm">{jobDoc.orgName}</div>
            <div className="font-bold text-lg mb-1">{jobDoc.title}</div>
            <div className="text-gray-400 text-sm">
                {jobDoc.remote} &middot; {jobDoc.city}, {jobDoc.country} &middot; {jobDoc.type}
            </div>
            <div className="text-sm font-semibold my-1 flex gap-2">
                <Link href={'/jobs/edit/' + jobDoc._id}>
                <button className="text-green-500">Edit</button>
                </Link>
               
                <button className="text-red-600">Delete</button>
            </div>
          </div>

            {jobDoc.createdAt && (
                 <TimeAgoFun createdAt={jobDoc.createdAt} updatedAt={jobDoc.updatedAt}/>
            )}
           
            
            
        </div>

        </div>

       
    </div>

  )
}

export default JobRow
