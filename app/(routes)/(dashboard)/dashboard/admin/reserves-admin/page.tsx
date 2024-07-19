import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import TableReserves from './components/TableReserves/TableReserves';
import { isAdministrator } from '@/lib/isAdministrador';

export default async function pageReservesAdmin() {
    const { userId } = auth();
    const user = await currentUser();
    

    if(!userId || !user || !isAdministrator(userId)) {
        return redirect("");
    }

    const orders = await db.order.findMany({
        orderBy: {
            createAt: "desc",
        }
    })
    console.log(user)

    return (
        <div>
            <h1 className="text-2xl mb-4">
                Reserves page
            </h1>
            <TableReserves orders={orders}/>
        </div>
    )
}
