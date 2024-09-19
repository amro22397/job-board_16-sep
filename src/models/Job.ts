import { model, models, Schema } from 'mongoose'

export type job = {
    title: string, remote: string, type: string, salary: number, country: string, state: string,
    city: string, countryid: string, stateid: string, cityId: string,  JobIcon: string, orgId: string, contactPhoto: string, contactName: string,
    orgName: string, contactPhone: string, contactEmail: string, description: string,
    createdAt: string, updatedAt: string, _id: string,
    isAdmin: boolean, id: string,
    __v: number
}

const JobSchema = new Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    remote: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    countryid: {
        type: String,
        required: true,
    },
    stateid: {
        type: String,
        required: true,
    },
    cityId: {
        type: String,
        required: true,
    },
    JobIcon: {
        type: String,
    },
    orgId: {
        type: String,
        required: true,
    },
    contactPhoto: {type: String},
    contactName: {type: String, required: true},
    contactPhone: {type: String, required: true},
    contactEmail: {type: String, required: true},
    
    description: {
        type: String,
        required: true,
    },
}, {timestamps: true})

export const JobModel = models?.Job || model('Job', JobSchema)