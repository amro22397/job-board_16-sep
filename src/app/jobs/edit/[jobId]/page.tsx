import JobForm from '@/app/components/JobForm';
import { JobModel } from '@/models/Job';
import mongoose from 'mongoose';
import React from 'react'
import '@radix-ui/themes/styles.css';
import "react-country-state-city/dist/react-country-state-city.css";
import { getUser } from '@workos-inc/authkit-nextjs';
import { WorkOS } from '@workos-inc/node';



type PageProps = {
    params: {
        jobId: string;
    }
}

const page = async (pageProps: PageProps) => {

    const { user } = await getUser();
    const workos = new WorkOS(process.env.WORKOS_API_KEY);


    await mongoose.connect(process.env.MONGO_URL as string);
    const jobDoc = JSON.parse(JSON.stringify(await JobModel.findOne({_id: pageProps.params.jobId})))

    if (!jobDoc) return 'Job not found'
    if (!user) return 'Please log in'

    const oms = await workos.userManagement.listOrganizationMemberships({
        userId: user.id,
        organizationId: jobDoc.orgId
    })

    if (oms.data.length === 0) {
        return 'Access denied'
    }

  return (
    <div>
        <JobForm orgId={jobDoc.orgId} editJobDoc={jobDoc}
        user={user} />
    </div>
  )
}

export default page
