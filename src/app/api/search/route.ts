import { JobModel } from "@/models/Job";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    mongoose.connect(process.env.MONGO_URL as string)
    
    const searchItem = req.nextUrl.searchParams.get('searchTerm');

    const jobDocs = await JobModel.find({
        title: { $regex: searchItem, $options: 'i' },
    })

    return Response.json(jobDocs);
 }