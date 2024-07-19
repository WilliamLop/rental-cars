import Navbar from '@/components/Shared/Navbar/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function orderConfirmationPage() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl p-6 grid place-content-center h-[80vh]">
                <div className="flex items-center flex-col justify-center gap-6 text-center shadow-md py-12 rounded-lg">
                    <h1 className="text-2xl">
                        Muchas gracias por confiar en nosotros 🤝
                    </h1>
                    <p className="max-w-[650px] mx-auto">
                        En breve, recibiras toda la información acerca de tu servicio al correo electronico que tienes en RentalCars, recuerda revisar para obtener todos los detalles posibles
                    </p>
                    <p className="">
                        🔎 Puedes visualizar todas tus reservas dentro de tu area de cliente
                    </p>
                    <Link href="/">
                        <Button>
                            Volver a ver los productos
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
