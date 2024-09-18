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

const JobForm = ({orgId}: {orgId: string}) => {
    const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [cityId, setCityId] = useState(0);


  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  async function handleSaveJob(data: FormData) {
    data.set('country', country.toString());
    data.set('state', state.toString());
    data.set('city', city.toString());
    data.set('orgId', orgId);
    const jobDoc = await saveJobAction(data);
    redirect(`/jobs/${jobDoc.orgId}`);
  }

  return (
    <Theme >
    <form action={handleSaveJob} className="container flex flex-col gap-4 mt-6">

        <TextField.Root placeholder='Job title' id="title"
        name="title" />

        
            <div className="grid grid-cols-3 gap-6 *:grow">
                <div className="">
                Remote?
                <RadioGroup.Root defaultValue='hybrid' name="remote"
                >
                    <RadioGroup.Item value='onsite'>On-site</RadioGroup.Item>
                    <RadioGroup.Item value='hybrid'>Hybrid-remote</RadioGroup.Item>
                    <RadioGroup.Item value='remote'>Fully remote</RadioGroup.Item>
                </RadioGroup.Root>
                </div>

                <div className="">
                Full time ?
                <RadioGroup.Root defaultValue='full' name='type'
                >
                    <RadioGroup.Item value='project'>Project</RadioGroup.Item>
                    <RadioGroup.Item value='part'>Part-time</RadioGroup.Item>
                    <RadioGroup.Item value='full'>Full-time</RadioGroup.Item>
                </RadioGroup.Root>
            </div>
            </div>

            <div className="" >
                <TextField.Root name='salary'
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
        id='country'
        onChange={(e:any) => {
            setCountryid(e.id);
            setCountry(e.name);
        }}
        placeHolder="Select Country"
/>

<StateSelect
id="state"
countryid={countryid}
onChange={(e:any) => {
setstateid(e.id);
setState(e.name)

}}
placeHolder="Select State"
/>
<CitySelect
id="city"
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

                    <ImageUpload name='JobIcon' icon={`fa-solid fa-star`} />
            </div>

            <div className='grow'>
                <h3>Contact person</h3>
                
             <div className="flex gap-2">

                <div className="">
                    
                    <ImageUpload name='contactPhoto' icon={`fa-solid fa-user`} />
              </div>

                    <div className="grow flex flex-col gap-1">
                    <TextField.Root placeholder='name' name='contactName'>
                        <TextField.Slot>
                        <i className="fa-solid fa-user text-gray-400"></i>
                        </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root placeholder='phone' type='tel' name='contactPhone'>
                        <TextField.Slot>
                        <i className="fa-solid fa-phone"></i>
                        </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root placeholder='Email' type='email' name='contactEmail'>
                        <TextField.Slot>
                        <i className="fa-solid fa-envelope"></i>
                        </TextField.Slot>
                    </TextField.Root>
                </div>
            </div>

                
         </div>
        </div>

        <TextArea id="description"
        placeholder='Job description' resize='vertical' name='description' />
        
        <div className="">
            <Button size='3'>
                <span className="px-8">Save</span>
            </Button>
        </div>
    </form>

    </Theme>
  )
}

export default JobForm
