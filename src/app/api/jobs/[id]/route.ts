import { JobModel } from "@/models/Job";
import mongoose from "mongoose";

export async function DELETE(req: Request) {
    mongoose.connect(process.env.MONGO_URL as string)
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');

    await JobModel.findByIdAndDelete({_id})
    return Response.json(true);
 }