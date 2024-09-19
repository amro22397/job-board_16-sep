import Jobs from '@/app/components/Jobs';
import { addOrgAndUserData, JobModel } from '@/models/Job';
import { getUser } from '@workos-inc/authkit-nextjs';
import { AutoPaginatable, OrganizationMembership, WorkOS } from '@workos-inc/node';
import mongoose from 'mongoose';
import Link from 'next/link';
import React from 'react'

type PageProps = {
    params: {
        orgId: string;
    }
}

const page = async (props: PageProps) => {
    const workos = new WorkOS(process.env.WORKOS_API_KEY);
    const org = await workos.organizations.getOrganization(props.params.orgId);

    const {user} = await getUser(); 
    let jobsDocs = JSON.parse(JSON.stringify(await JobModel.find({orgId: org.id}, {}, {sort: {createdAt: -1}})));
    jobsDocs = await addOrgAndUserData(jobsDocs, user);

  return (
    <div className=''>

      <div className="flex flex-row items-center justify-between
      mx-6 my-2">
      <div className="">
        <h1 className="text-xl my-4 capitalize">{org.name} jobs</h1>
      </div>

      <Link href={'/new-listing'}>
      <button className='bg-blue-700 px-3 py-1 text-white rounded-md
      mb-4 font-semibold hover:bg-blue-800 active:bg-blue-900'>
        Add other job
      </button>
      </Link>
      
      </div>
      
      <Jobs jobs={jobsDocs} header={"Jobs posted by " + org.name} />
    </div>
  )
}

export default page
