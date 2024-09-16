import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="">
          <div className="container flex items-center justify-between mx-auto my-4">
            <Link href={'/'} className="font-bold text-xl">Job Board</Link>

            <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
              <Link href={'/login'} className="bg-gray-200">Login</Link>
              <Link className="bg-blue-600 text-white" href={'/new-listing'}>
              Post a job</Link>
            </nav>
          </div>
        </header>
  )
}

export default Header
