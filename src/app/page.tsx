import React from 'react'
import Hero from './components/Hero'
import Jobs from './components/Jobs'
import { getUser } from '@workos-inc/authkit-nextjs'
import { addOrgAndUserData, JobModel } from '@/models/Job'
import mongoose from 'mongoose'


const page = async () => {
  
  const { user } = await getUser();

  mongoose.connect(process.env.MONGO_URL as string);
  const latestJobs = await addOrgAndUserData(
    
    await JobModel.find({}, {}, {limit:5, sort:'-createdAt'}),
    user,
  )

  return (
    <div>
      <Hero />
      <Jobs header={''} jobs={latestJobs} />
    </div>
  )
}

export default page
