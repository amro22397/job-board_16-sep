import Link from 'next/link'
import React, { useState } from 'react'

const Hero = () => {


  return (
    <section className="py-12 flex flex-col items-center gap-4
    max-lg:flex-col max-lg:gap-16 max-md:gap-12">
      
      

        <div className="mb-8
      flex flex-col items-center justify-center gap-4">
        <span className="text-4xl font-bold">Are you a recruiter?</span>
        <Link className="rounded-md py-2 px-4 bg-blue-600 text-white" href={'/new-listing'}>
              Post a Job</Link>
      </div>

      <form
        className="gap-2 max-w-md mx-auto w-full
        flex flex-row">

            <input type="search"
            className='border border-gray-400 w-full py-2 px-3 rounded-md'
            placeholder='Search phrase..' />

            <button type="submit"
             className="bg-blue-600 text-white py-2 px-4 rounded-md">
                Search
            </button>

        </form>
        
    </section>
  )
}

export default Hero
