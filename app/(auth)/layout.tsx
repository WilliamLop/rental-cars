import Image from 'next/image'
import React from 'react'

export default function Authlayout( {children}: {children: React.ReactNode} ) {
    return (
        <section className='grid lg:grid-cols-2 h-screen items-center justify-center'>
            <div className="flex items-center justify-center">
                {children}
            </div>
            <div className="hidden lg:flex lg:flex-col gap-1 lg:bg-slate-300 h-full justify-center items-center">
                <Image src="/logo.svg" alt="Logo rentaCars"  width="80" height="80"/>
                <h1 className="font-bold text-2xl">
                    Rental Cars
                </h1>
            </div>
        </section>
    )
}
