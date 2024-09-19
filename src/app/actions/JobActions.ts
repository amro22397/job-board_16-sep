'use server'

import mongoose from "mongoose";
import { JobModel } from "@/models/Job";
import { revalidatePath } from "next/cache";


export async function saveJobAction(data: FormData) {
    await mongoose.connect(process.env.MONGO_URL as string);
    const {id, ...jobData} = Object.fromEntries(data);

    if ('orgId' in jobData) {
        revalidatePath('/jobs/'+jobData?.orgId)
    }

    if (id) {
        const jobDoc = await JobModel.findByIdAndUpdate(id, jobData )
        return JSON.parse(JSON.stringify(jobDoc));
    } else {
        const jobDoc = await JobModel.create(jobData);
        return JSON.parse(JSON.stringify(jobDoc));
    }
    
    
    
}