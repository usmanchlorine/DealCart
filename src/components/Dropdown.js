import React, { useEffect, useState } from 'react'

export default function Dropdown(props) {
    const [value, setCurrency] = useState(props.value1 || "USD");
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        setToggle(!toggle);
    }, [value])
    return (
        <div class="relative inline-block text-left">
            <div>
                <button type="button" onClick={() => setToggle(!toggle)} class="inline-flex w-full justify-center gap-x-1.5 text-white  bg-inherit  px-3 py-2 text-sm font-semibold " id="menu-button" aria-haspopup="true">
                    {value}
                    <svg class="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            {toggle ? <div className={`absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  `} role="menu" aria-orientation="vertical" tabindex="-1">
                <div class="py-1" role="none">

                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" onClick={() => setCurrency(props.value2 || "PKR")} role="menuitem" tabindex="-1" id="menu-item-0">PKR</a>
                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" onClick={() => setCurrency(props.value || "EUR")} role="menuitem" tabindex="-1" id="menu-item-1">EUR</a>


                </div>
            </div> : ""}
        </div>
    )
}
