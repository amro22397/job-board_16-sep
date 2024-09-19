
'use client'

import React from 'react'
import TimeAgoFun from './TimeAgoFun'
import { job, JobModel } from '@/models/Job'
import Link from 'next/link'
import mongoose from 'mongoose'
import { revalidatePath } from 'next/cache'
import DeletionButton from './DeletionButton'
import { useRouter } from 'next/navigation'


const JobRow = async ({jobDoc}: {jobDoc: job}) => {

    const route = useRouter();

    

    const handleDelete = async () => {
        
        let result = confirm('Are you sure you want to delete this job ?')

        if (!result) return

        const res = await fetch('/api/jobs?_id='+jobDoc._id, {
            method: 'DELETE'
        });

        if (res.ok) {
            route.push(`/jobs/${jobDoc.orgId}`)
            window.location.reload();
        } else {
            alert('Error deleting job')
        }
    }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm relative">


        <div className="absolute top-2 right-4">
        <i className="fa-regular fa-heart"></i>
        </div>
        
        <div className="flex grow gap-4
        max-md:flex-col max-md:justify-center max-md:items-center">

        <div className="content-center">
            <img src={jobDoc.JobIcon || 'https://cdn-icons-png.freepik.com/512/8398/8398352.png'} alt="image" className="w-36 h-38 object-fill
            max-lg" />
        </div>

        <div className="grow">
          <div className="grow max-md:flex max-md:flex-col max-md:justify-center max-md:items-center
        max-md:mx-auto">
            <div className="">
            <Link href={`/jobs/${jobDoc.orgId}`} className="text-gray-500 text-sm">{jobDoc.orgName}</Link>
            </div>
            <div className="font-bold text-lg mb-1">
                <Link className='hover:underline' href={'/showJob/'+jobDoc._id}>{jobDoc.title}</Link>
            </div>
            <div className="text-gray-400 text-sm">
                {jobDoc.remote} &middot; {jobDoc.city}, {jobDoc.country} &middot; {jobDoc.type}
            </div>

            <div className="text-sm font-semibold my-[3px] gap-3
            flex">
                <Link href={'/jobs/edit/' + jobDoc._id}>
                <button className="text-green-500">Edit</button>
                </Link>
               
               <DeletionButton onClick={handleDelete} />

                
            </div>

            <div className="flex flex-row items-center justify-between">

                <div className=""></div>

            {jobDoc.createdAt && (
                 <TimeAgoFun createdAt={jobDoc.createdAt} updatedAt={jobDoc.updatedAt}/>
            )}
            </div>
            
          </div>

          
            
           
            
            
        </div>

        </div>

       
    </div>

  )
}

export default JobRow
