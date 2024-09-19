import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="py-12 flex flex-row items-center justify-evenly
    max-lg:flex-col max-lg:gap-16 max-md:gap-12">

        <div className="">
        <h1 className="text-4xl font-bold text-center">
            Find your next <br />dream job
        </h1>

       {/* <p className="text-center text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, lqefkef kfeakjel ipsum dolor sit amet, lqefkef kfeakjel ipsum dolor sit amet, lqefkef kfeakjel ipsum dolor sit amet, lqefkef kfeakjel
        </p> */}

        <form className="flex gap-2 mt-4 max-w-md mx-auto">
            <input type="search"
            className='border border-gray-400 w-full py-2 px-3 rounded-md'
            placeholder='Search phrase..' />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                Search
            </button>
        </form>
        </div>

        <div className="mb-8
      flex flex-col items-center justify-center gap-4">
        <span className="text-4xl font-bold">Are you a recruiter?</span>
        <Link className="rounded-md py-2 px-4 bg-blue-600 text-white" href={'/new-listing'}>
              Post a job</Link>
      </div>
        
    </section>
  )
}

export default Hero
