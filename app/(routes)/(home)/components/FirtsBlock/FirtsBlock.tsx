import Reveal from '@/components/Shared/Reveal/Reveal'
import Image from 'next/image'
import React from 'react'

export default function FirtsBlock() {
    return (
        <div className='grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center overflow-hidden'>
            <Reveal className="p-6 lg:pl-40" position='bottom'>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
                    Premium
                    <span className=""> Rental Cars </span>
                    in Colombia 
                </h1>
                <p className="text-lg mt-2 lg:mt-8 lg:text-xl max-w-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptas ea cum, perferendis neque facere rerum saepe veritatis dolores, maiores aspernatur consequuntur labore fugit nemo consectetur libero, in dolore ad.
                </p>
            </Reveal>

            <Reveal className="flex justify-end" position='right'>
                <Image src="/images/porsche.png" alt="rent-cars" width={800} height={800} priority/>
            </Reveal>
        </div>
    )
}
