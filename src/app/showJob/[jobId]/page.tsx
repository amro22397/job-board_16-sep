import { JobModel } from '@/models/Job';
import mongoose from 'mongoose';
import Image from 'next/image';
import React from 'react'

type PageProps = {
    params: {
        jobId: string;
    }
};


const page = async (props: PageProps) => {
    const jobId = props.params.jobId;
    await mongoose.connect(process.env.MONGO_URL as string)
    const jobDoc = await JobModel.findById(jobId);


  return (
    <div className="my-6 max-xl:w-full
    flex flex-col max-md:items-center max-md:justify-center max-md:mx-auto
    max-md:my-8">
        <div className="md:flex ">
            <div className="grow
            max-xl:mb-4">
                <h1 className="text-5xl mb-4 font-semibold
                max-lg:text-3xl max-lg:font-bold">
                    {jobDoc.title}
                </h1>

                <div className="capitalize text-sm text-blue-800 mb-4">
                    {jobDoc.remote}
                    {' '} &middot; {' '}
                    {jobDoc.city}, {jobDoc.country}
                    {' '} &middot; {' '}
                    {jobDoc.type}
                </div>
            <div className="whitespace-pre-line text-sm text-gray-600
                w-[70%] max-md:w-full ">
            {jobDoc.description}
            </div>
            </div>

            <div className="max-md:flex max-md:mx-auto max-md:justify-center
            max-md:my-10">
                <Image 
                src={jobDoc?.JobIcon || '/Blank-user.png'} alt={'job icon'}
                width={500} height={500}
                className={'w-[480px] h-[300px] object-cover object-center'}
                />
            </div> 
        </div>

        
        <div className="mt-14 bg-gray-200 p-8 w-full rounded-lg max-w-[80%] mx-auto
        flex flex-col max-md:justify-center max-md:items-center max-md:mx-auto
        max-md:max-w-full">
            <h3 className="font-bold mb-4 max-md:mb-6">
                Apply by contacting us
            </h3>

            <div className="flex gap-10 max-md:flex-col
            max-md:justify-center max-md:items-center max-md:mx-auto
            ">
                <Image
                src={jobDoc.contactPhoto || '/blank-contactphoto.png'}
                alt={'contact Person'}
                width={500} height={500}
                className='w-[230px] h-[300px] object-cover object-center'
                />

                <div className="flex items-start flex-col mt-2 gap-4
                text-lg">

                    <span className="">
                    <span className='font-bold'>Name: &nbsp;</span>
                         {jobDoc.contactName}</span>
                    <span className="">
                    <span className='font-bold'>Email: &nbsp;</span>
                         {jobDoc.contactEmail}</span>
                    <span className="">
                    <span className='font-bold'>Phone: &nbsp;</span>
                         {jobDoc.contactPhone}</span>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default page
