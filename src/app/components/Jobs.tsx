import React from 'react'
import JobRow from './JobRow'

const Jobs = () => {
  return (
    <div className="bg-gray-100 p-8
    rounded-3xl">
        <h2>Recent jobs</h2>

        <div className="flex flex-col gap-4">
            <JobRow />
        </div>
    </div>
  )
}

export default Jobs
