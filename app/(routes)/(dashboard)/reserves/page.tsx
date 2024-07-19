import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import TableReserves from './components/TableReserves/TableReserves';

export default async function pageReserves() {

    const { userId } = auth();

    if(!userId) {
        return redirect("/");
    }

    const orders = await db.order.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            createAt: "desc"
        }
    })

    console.log(orders)
    return (
        <div>
            <h1 className="mb-4 text-3xl">
                Reserves page
            </h1>
            {orders.length === 0 ? (
                <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-xl">
                        No tienes ningun pedido 🕑✖
                    </h2>
                    <p className="">
                        Haz tus pedidos atraves de la página de vehículos
                    </p>
                    <Link href="/cars">
                    <Button>
                        Lista de vehículos
                    </Button>
                    </Link>
                </div>
            ): (
                <TableReserves orders={orders}/>
            )}

        </div>
    )
}
