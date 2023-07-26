import React from 'react'
import { useSelector } from 'react-redux'
import Cards from './cards'

export default function FeaturedProducts() {
    const featuredCard = useSelector(state => state.ProductReducer.featuredProducts)
    console.log(featuredCard)

    return (
        <section className='bg-white min-h-[80vh] w-full '>
            <div className='mx-auto max-w-[1300px] min-h-[80vh] text-center justify-center text-[#2e2e3f] text-4xl font-semibold flex flex-col '>
                <h1>Feature Product</h1>
                <div className='grid xl:grid-cols-5 lg:grid-cols-4 place-items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-12 gap-2'>
                    {featuredCard?.map((card, index) => {
                        return <Cards heading={card.title.slice(0, 20)} price={card.price} image={card.image} code={card.id} key={card.id} />
                    })}

                </div>

            </div>

        </section>
    )
}
