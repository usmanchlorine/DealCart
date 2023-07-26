import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { BsCart } from "react-icons/bs";
export default function NavBar() {
    return (
        <nav class="bg-[#7E33E0]">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                <div class="relative flex h-16 items-center justify-between">

                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4 items-center text-white">
                                <div>hekto@gmail.com</div>
                                <div>+923123323123</div>

                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className='flex child:cursor-pointer flex-1 items-center  child:text-white child:font-semibold justify-center sm:items-center  sm:justify-start'>


                            <Dropdown />
                            <div className='flex  child:px-4'>
                                <a className='px-3 text-white font-semibold'>Login</a>

                                <a className='text-white font-semibold'>WishList </a>
                                <a> <BsCart /></a>

                            </div>






                        </div>


                        <div class="relative ml-3">




                        </div>
                    </div>
                </div>
            </div>



        </nav>
    )
}
