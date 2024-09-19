'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchURL, setSearchURL] = useState('');

  const [loading, setLoading] = useState(false);
  const [jobDocs, setJobDocs] = useState([]);

  console.log(searchURL)

  const route = useRouter();

  const handleSearch = async (e: any) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');

    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }

    const fetchListing = async () => {
      setLoading(true);

      const res = await fetch('/api/search?'+searchURL)
      const data = await res.json();

      console.log(data)
      setJobDocs(data);
      console.log(jobDocs)
      setLoading(false);

      console.log(data)
  }

  fetchListing();

  }, [location.search]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set('searchTerm', searchTerm)
    const SearchQuery = urlParams.toString();
    setSearchURL(SearchQuery);
    route.push(`/search-page?${SearchQuery}`)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}
        className="flex gap-2 mt-4 max-w-md mx-auto">
            <input type="search"
            value={searchTerm} onChange={handleSearch}
            className='border border-gray-400 w-full py-2 px-3 rounded-md'
            placeholder='Search phrase..' />

            <button type="submit"
             className="bg-blue-600 text-white py-2 px-4 rounded-md">
                Search
            </button>
        </form>


    </div>
  )
}

export default page
