

import React, { useState } from 'react'
import JobRow from './JobRow'
import { job } from '@/models/Job'
import DeleteMessage from './DeleteMessage'

const Jobs = ({header, jobs}: {header: string, jobs:job[]}) => {

  return (
    <div className="bg-slate-200 py-6
    rounded-3xl">
      
      <div className="container relative">
      

      <h2 className='font-bold mb-4'>{header || 'Recent jobs'}</h2>

<div className="flex flex-col gap-4">
    {!jobs?.length && (
      <div>No jobs found</div>
    )}

    {jobs && jobs.map(job => (
      <JobRow jobDoc={job} />
    ))}
</div>

      </div>
        
    </div>
  )
}

export default Jobs
