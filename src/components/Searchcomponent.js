import React from 'react'

export default function Searchcomponent() {
    return (
        <form>
            <div class="flex w-full">

                <div class=" flex relative sm:w-full w-40 bg-white">
                    <input type="search" id="location-search" class="block p-2.5 w-full  text-sm text-gray-900 bg-gray-50  outline-none  border-l-gray-50 border-l-2 border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for city or address" required />
                    <button type="submit" class=" top-0 right-0 h-full p-2.5 text-sm font-medium text-white bg-pink-600 border focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    )
}
