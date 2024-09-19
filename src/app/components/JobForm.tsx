'use client'

import { Button, RadioGroup, TextArea, TextField, Theme } from '@radix-ui/themes';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
  } from "react-country-state-city";
  import { useState } from 'react';
import ImageUpload from './ImageUpload';
import { saveJobAction } from '../actions/JobActions';
import { redirect } from 'next/navigation';
import type { job } from '@/models/Job';

const JobForm = ({editJobDoc, orgId}: {editJobDoc?: job | null,orgId: string}) => {
    const [countryid, setCountryid] = useState(editJobDoc?.countryid || 0);
  const [stateid, setstateid] = useState(editJobDoc?.stateid || 0);
  const [cityId, setCityId] = useState(editJobDoc?.cityId || 0);


  const [country, setCountry] = useState(editJobDoc?.country || '');
  const [state, setState] = useState(editJobDoc?.state || '');
  const [city, setCity] = useState(editJobDoc?.city || '');

  async function handleSaveJob(data: FormData) {
    data.set('country', country.toString());
    data.set('state', state.toString());
    data.set('city', city.toString());
    data.set('countryid', countryid.toString());
    data.set('stateid', stateid.toString());
    data.set('cityId', cityId.toString());
    data.set('orgId', orgId);
    const jobDoc = await saveJobAction(data);
    redirect(`/jobs/${jobDoc.orgId}`);
  }

  return (
    <Theme >
    <form action={handleSaveJob} className="container flex flex-col gap-4 mt-6">

        {editJobDoc && (
            <input type="hidden" name='id' value={editJobDoc._id} />
        )}

        <TextField.Root placeholder='Job title' id="title"
        name="title" defaultValue={editJobDoc ? editJobDoc.title : ""} />

        
            <div className="grid grid-cols-3 gap-6 *:grow">
                <div className="">
                Remote?
                
                <RadioGroup.Root name="remote"
                defaultValue={editJobDoc ? editJobDoc.remote : "hybrid"}
                >
                    <RadioGroup.Item value='onsite'>On-site</RadioGroup.Item>
                    <RadioGroup.Item value='hybrid'>Hybrid-remote</RadioGroup.Item>
                    <RadioGroup.Item value='remote'>Fully remote</RadioGroup.Item>
                </RadioGroup.Root>
                </div>

                <div className="">
                Full time ?
                <RadioGroup.Root name='type'
                defaultValue={editJobDoc ? editJobDoc.type : "full"}
                >
                    <RadioGroup.Item value='project'>Project</RadioGroup.Item>
                    <RadioGroup.Item value='part'>Part-time</RadioGroup.Item>
                    <RadioGroup.Item value='full'>Full-time</RadioGroup.Item>
                </RadioGroup.Root>
            </div>
            </div>

            <div className="" >
                <TextField.Root name='salary' defaultValue={editJobDoc ? editJobDoc.salary : ""}
                id='salary'>
                    <TextField.Slot>
                        $
                    </TextField.Slot>
                    <TextField.Slot>
                        k/year
                    </TextField.Slot>
                </TextField.Root>
            </div>
        

        <div className="">

        <h2 className="mb-3 text-xl font-bold">Location</h2>

        <div className="flex gap-4 *:grow">
        <CountrySelect
        defaultValue={editJobDoc ? {id: countryid, name: country} : ''}
        id='country'
        onChange={(e:any) => {
            setCountryid(e.id);
            setCountry(e.name)
        }}

        placeHolder="Select Country"
/>

<StateSelect
id="state"
defaultValue={editJobDoc ? {id: stateid, name: state} : ''}
countryid={countryid}
onChange={(e:any) => {
setstateid(e.id);
setState(e.name)

}}
placeHolder="Select State"
/>
<CitySelect
id="city"
defaultValue={editJobDoc ? {id: cityId, name: city} : ''}
countryid={countryid}
stateid={stateid}
onChange={(e:any) => {
    setCityId(e.id);
    setCity(e.name)
    
    }}
placeHolder="Select City"
/>


        </div>
        </div>

        <div className="flex">
            <div className="w-1/3">
                <h3>Job icon</h3>

                    <ImageUpload JobIconImage={editJobDoc ? editJobDoc.JobIcon : ''}
                    name='JobIcon' icon={`fa-solid fa-star`} />
            </div>

            <div className='grow'>
                <h3>Contact person</h3>
                
             <div className="flex gap-2">

                <div className="">
                    
                    <ImageUpload JobIconImage={editJobDoc ? editJobDoc.contactPhoto : ''}
                    name='contactPhoto' icon={`fa-solid fa-user`} />
              </div>

                    <div className="grow flex flex-col gap-1">
                    <TextField.Root placeholder='name' name='contactName'
                    defaultValue={editJobDoc ? editJobDoc.contactName : ""}>
                        <TextField.Slot>
                        <i className="fa-solid fa-user text-gray-400"></i>
                        </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root placeholder='phone' type='tel' name='contactPhone'
                    defaultValue={editJobDoc ? editJobDoc.contactPhone : ""}>
                        <TextField.Slot>
                        <i className="fa-solid fa-phone"></i>
                        </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root placeholder='Email' type='email' name='contactEmail'
                    defaultValue={editJobDoc ? editJobDoc.contactEmail : ""}>
                        <TextField.Slot>
                        <i className="fa-solid fa-envelope"></i>
                        </TextField.Slot>
                    </TextField.Root>
                </div>
            </div>

                
         </div>
        </div>

        <TextArea id="description"
        placeholder='Job description' resize='vertical' name='description'
        defaultValue={editJobDoc ? editJobDoc.description : ""} />
        
        <div className="">
            <Button type='submit' size='3'>
                <span className="px-8">Save</span>
            </Button>
        </div>
    </form>

    </Theme>
  )
}

export default JobForm
