import React from 'react'

function Search() {
  return (
    <>
    <div>Search</div>
    <input type="text" placeholder="Search" className='border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full' />
    <div>Search Results</div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 overflow-hidden'>
        <div className='h-48 bg-gray-300 dark:bg-gray-700'></div>
        <div className='p-4'>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white'>Lodging Name</h2>
          <p className='text-gray-600 dark:text-gray-400'>Location</p>
        </div>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 overflow-hidden'>
        <div className='h-48 bg-gray-300 dark:bg-gray-700'></div>
        <div className='p-4'>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white'>Lodging Name</h2>
          <p className='text-gray-600 dark:text-gray-400'>Location</p>
        </div>
      </div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 overflow-hidden'>
        <div className='h-48 bg-gray-300 dark:bg-gray-700'></div>
        <div className='p-4'>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white'>Lodging Name</h2>
          <p className='text-gray-600 dark:text-gray-400'>Location</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Search