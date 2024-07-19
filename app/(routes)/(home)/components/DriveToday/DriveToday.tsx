import Reveal from '@/components/Shared/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function DriveToday() {
    return (
        <div className='p-6 lg_my-32 max-w-7xl mx-auto '>
            <div className="bg-[url('/images/background-2.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative overflow-hidden 2xl:overflow-visible">
                <div className="md:flex gap-x-6">
                    <Reveal className="" position='right'>
                        <h3 className="text-4xl text-white">
                            Drive your dream car Today
                        </h3>
                        <p className="text-white text-xl my-5">
                            Register and explore the world of premium cars
                        </p>

                        <Link href="/sign-in">
                            <Button variant="outline" size="lg">
                                Register here
                            </Button>
                        </Link>
                    </Reveal>
                    <Reveal className="lg:absolute lg:-right-32 top-5"
                    position="bottom">
                        <Image src="/images/audi.png" alt="car drive" width={500} height={250} />
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
