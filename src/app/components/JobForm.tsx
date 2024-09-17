'use client'

import { Button, RadioGroup, TextArea, TextField, Theme } from '@radix-ui/themes';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
  } from "react-country-state-city";
  import { useState } from 'react';

const JobForm = () => {
    const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  return (
    <Theme >
    <form action="" className="container flex flex-col gap-4 mt-6">

        <TextField.Root placeholder='Job title' />

        
            <div className="grid grid-cols-3 gap-6 *:grow">
                <div className="">
                Remote?
                <RadioGroup.Root defaultValue='hybrid' name="example">
                    <RadioGroup.Item value='onsite'>On-site</RadioGroup.Item>
                    <RadioGroup.Item value='hybrid'>Hybrid-remote</RadioGroup.Item>
                    <RadioGroup.Item value='remote'>Fully remote</RadioGroup.Item>
                </RadioGroup.Root>
                </div>

                <div className="">
                Full time ?
                <RadioGroup.Root defaultValue='full' name='example'>
                    <RadioGroup.Item value='project'>Project</RadioGroup.Item>
                    <RadioGroup.Item value='part'>Part-time</RadioGroup.Item>
                    <RadioGroup.Item value='full'>Full-time</RadioGroup.Item>
                </RadioGroup.Root>
            </div>
            </div>

            <div className="">
                <TextField.Root>
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
onChange={(e) => {
setCountryid(e.id);
}}
placeHolder="Select Country"
/>
<StateSelect
countryid={countryid}
onChange={(e) => {
setstateid(e.id);
}}
placeHolder="Select State"
/>
<CitySelect
countryid={countryid}
stateid={stateid}
onChange={(e) => {
console.log(e);
}}
placeHolder="Select City"
/>


        </div>
        </div>

        <div className="flex">
            <div className="w-1/3">
                <h3>Job icon</h3>
                <div className="bg-gray-100 rounded-md size-24
                inline-flex items-center content-center justify-center">
                    <i className="fa-solid fa-star text-gray-400"></i>
                </div>

                <div className="mt-2">
                    <Button>select file</Button>
                </div>
            </div>

            <div className='grow'>
                <h3>Contact person</h3>
                
             <div className="flex gap-2">

                <div className="">
                    <div className="bg-gray-100 rounded-md size-24 inline-flex items-center content-center justify-center">
                        <i className="fa-solid fa-user text-gray-400"></i>
                    </div>

                  <div className="mt-2">
                    <Button>select file</Button>
                  </div>
              </div>

                    <div className="grow flex flex-col gap-1">
                    <TextField.Root placeholder='Jhon Doe'>
                        <TextField.Slot>
                        <i className="fa-solid fa-user text-gray-400"></i>
                        </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root placeholder='phone' type='tel'>
                        <TextField.Slot>
                        <i className="fa-solid fa-phone"></i>
                        </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root placeholder='Email' type='email'>
                        <TextField.Slot>
                        <i className="fa-solid fa-envelope"></i>
                        </TextField.Slot>
                    </TextField.Root>
                </div>
            </div>

                
         </div>
        </div>

        <TextArea placeholder='Job description' resize='vertical' />
        
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
