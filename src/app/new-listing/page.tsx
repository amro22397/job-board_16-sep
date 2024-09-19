import { getUser } from '@workos-inc/authkit-nextjs'
import { WorkOS } from '@workos-inc/node';
import React from 'react'
import { createCompany } from '../actions/workosActions';
import Link from 'next/link';

const page = async () => {

    

    const workos = new WorkOS(process.env.WORKOS_API_KEY);

    const { user } = await getUser();

      
    if (!user) {
        return (
       <div className="text-center text-xl font-semibold my-20">
            <div>You need to be logged in to post a job !</div>
        </div>
        )
    }

   
       const organizationMembership = await workos.userManagement.listOrganizationMemberships({
            userId: user.id,
        });

        const activeOrganizationsMemberships = organizationMembership.data.filter(om => om.status === 'active');
        const organizationNames:{[key: string]: string} = {};
        for (const activeMembership of activeOrganizationsMemberships) {
            const organization = await workos.organizations.getOrganization(activeMembership.organizationId);
            organizationNames[organization.id] = organization.name;
        }
    

  return (
    <div className='container'>

            <div>
                <h2 className="text-lg mt-6">Your companies</h2>
                <p className="text-gray-500 text-sm mb-2">Select a company to create a job add for</p>

                <div>
                    <div className="border inline-block rounded-md">
                        {Object.keys(organizationNames).map(orgId => (
                            <Link href={'/new-listing/' + orgId}
                            className={'py-2 px-4 flex gap-2 items-center'
                             + (Object.keys(organizationNames)[0]) === orgId ? '' : "border-t"}>
                                {organizationNames[orgId]}
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        ))}
                    </div>
                </div>

                <Link 
                className='inline-flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md mt-6'
                href={'/new-company'}
                >
                    Create a new company
                    <i className="fa-solid fa-arrow-right h-4"></i>
                </Link>

                
            </div>
        
    </div>
  )
}

export default page
