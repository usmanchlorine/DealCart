import React from 'react'

export default function Jumbtron() {
    return (
        <section class="bg-cover min-h-[80vh] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80')] bg-gray-500 bg-blend-multiply" >
            <div class="px-4 sm:px-16 md:px-52 flex flex-col   max-w-screen-xl text-left py-24 lg:py-56">
                <h1 class="mb-4 text-4xl font-extrabold text-left tracking-tight leading-none text-white md:text-5xl lg:text-6xl">New Mobile Collection Trends in 2020</h1>
                <p class="mb-8 text-left text-lg font-semibold text-gray-300 lg:text-xl ">Here at Deal we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-start   sm:space-y-0 sm:space-x-4">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-left text-white  bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-900">
                        Get started
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>

                </div>
            </div>
        </section >
    )
}
