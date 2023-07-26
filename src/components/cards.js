import React, { useRef } from 'react'

export default function Cards({ heading, price, image, code }) {
    const viewdetail = useRef();

    const onmouseover = (e) => {
        console.log("mousse leave")
        viewdetail.current.hidden = true;


    }
    const onMousein = (e) => {
        console.log("mouse in ")
        viewdetail.current.hidden = ""
    }
    return (
        <div onMouseOver={onMousein} onMouseLeave={onmouseover} class="w-[250px] flex flex-col   items- py-5 border-2  text-center shadow-lg rounded-sm transition-all delay-100 ease-in-out hover:bg-blue-100">
            <div class="relative  h-[60%]">
                <img class="w-full item-cover object-contain h-[200px]" src={image} />
                <div class=" absolute left-20  cursor-pointer z-10"  ><button ref={viewdetail} hidden="true" class="w-fit text-sm   bg-green-500 h p-2 text-white">View Detail</button></div>
            </div>
            <div className='relative flex justify-between flex-col   pt-16'>
                <p class="mb-0  pb-1 font-semibold text-pink-500 text-xl ">{heading}</p>
                <span class="flex items-center pb-2 justify-center gap-1  font-[900]"><span class="h-[3px] w-[10px] bg-blue-900"></span> <span class="h-[3px] w-[10px] bg-pink-400"></span> <span class="h-[3px] w-[10px] bg-green-400 text-green-400"></span></span>
                <div className='flex flex-col flex-grow justify-end'>

                    <h3 class="mb-1  text-center  text-base font-semibold text-blue-900">code-{code ? code : ""}</h3>
                    <p class="text-[14px] text-blue-900">${price}</p>

                </div>

            </div>
        </div>

    )
}
