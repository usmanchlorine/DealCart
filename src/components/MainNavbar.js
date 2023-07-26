import React, { useState } from 'react'
import Searchcomponent from './Searchcomponent'
import { BsCart } from "react-icons/bs";

export default function MainNavbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav class="bg-[#f1ebf9]">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button type="button" onClick={() => setToggle(!toggle)} class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>


                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex justify-between items-center min-w-full'>
                        <div class="flex flex-1 items-center space-x-4 justify-center sm:items-stretch sm:justify-start">
                            <div class="flex pl-5 sm:text-3xl text-xl  font-bold  items-center text-black">
                                Deal&nbsp;Cart
                            </div>
                            <div className='sm:flex hidden child:cursor-pointer  items-center pt-1 font-semibold  space-x-4'>
                                <a className='text-pink-500 pl-14'>Home</a>
                                <a>Pages</a>
                                <a>Product</a>
                                <BsCart />

                            </div>



                        </div>
                        <div>
                            <Searchcomponent />
                        </div>

                    </div>

                    <div class="absolute inset-y-0 right-0 flex text-black items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className='flex flex-1 items-center justify-center sm:items-stretch  sm:justify-start'>


                        </div>


                        <div class="relative ml-3">




                        </div>
                    </div>
                </div>
            </div>


            {toggle ? <div className="sm:hidden " >
                <div class="space-y-1 px-2 pb-3 pt-2 child:cursor-pointer text-black">

                    <a href="#" class=" text-black block  px-3 py-2 text-base font-semibold" aria-current="page">Home</a>
                    <a href="#" class=" text-black block  px-3 py-2 text-base font-semibold" aria-current="page">Pages</a>
                    <a href="#" class=" text-black block px-3 py-2 text-base font-semibold" aria-current="page">Products</a>

                </div>
            </div> : ""}
        </nav>
    )
}

