import Navbar from '@/components/Shared/Navbar/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function pageOrderError() {
    return (
        <>
            <Navbar />
            <div className="p-6 mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <h1 className="text-2xl">
                        OPS⁉ Ha ocurrido un error. Vuelve a intentarlo más tarde 🤝
                    </h1>
                    <Link href="/">
                        <Button>
                            Volver a ver los productos
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
