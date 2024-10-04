import { getSignInUrl,  getUser, signOut } from '@workos-inc/authkit-nextjs'
import Link from 'next/link'
import React from 'react'

const Header = async () => {
    const { user } = await getUser();
    const signInUrl = await getSignInUrl();

  return (
    <header className="mb-10">
        
          <div className="flex items-center justify-between mx-auto my-4">
            <Link href={'/'} className="font-bold text-xl">Job Board</Link>

           

            <nav className="flex gap-2 items-center">
              {!user && (
                <Link href={signInUrl} 
                className="bg-gray-200 rounded-md py-2 px-4">Login</Link>
              )}


              {user && (
                <>
                <p className="mr-2 text-gray-800 text-md font-semibold">{user.firstName} {user.lastName}</p>
                
                <Link href={'/profile/'+user.id}
                className='rounded-md bg-blue-600 text-white py-2 px-4
                hidden'>Profile</Link>
                </>
              )}


              {user && (
                <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              > 
              <button type="submit"
              className='rounded-md bg-gray-200 py-2 px-4'>Sign out</button>
              </form>
              )}

            </nav>
          </div>
        </header>
  )
}

export default Header
