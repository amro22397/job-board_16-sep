import { getUser } from '@workos-inc/authkit-nextjs';
import React from 'react'
import { createCompany } from '../actions/workosActions';
import { useRouter } from 'next/navigation';

const page = async () => {

    const { user } = await getUser();



    const handleNewCompanyFormSubmit = async (data:FormData) => {
        'use server'
        if (user) {
            await createCompany(data.get('newCompanyName') as string, user.id);
        }
    }

    if (!user) {
        return (
            <div className="text-center text-xl font-semibold my-20">
                 <div>You need to be logged in to post a job !</div>
             </div>
             )
    }


  return (
    <div className='container '>
      <h2 className="text-lg mt-6">Create a new company</h2>

                <p className="text-gray-500 text-sm mb-2">
                    To create a job listing your first need to register a company
                </p>

                <form action={handleNewCompanyFormSubmit} className="flex gap-2">
                    <input name='newCompanyName' type="text" 
                    className="p-2 border border-gray-400 rounded-md"
                    placeholder='company name' />

                    <button type='submit' 
                    className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
                        Create company
                    </button>
                </form>
    </div>
  )
}

export default page
