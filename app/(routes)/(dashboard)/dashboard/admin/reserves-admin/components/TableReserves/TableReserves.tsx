import React from 'react'
import { TableReservesProps } from './TableReserves.type'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { formatPrice } from '@/lib/formatPrice';


export default function TableReserves(props: TableReservesProps) {

    const { orders } = props

    const totalAmount = orders.reduce((acc, booking) => {
        return acc + parseFloat(booking.totalAmount);
    }, 0);


    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Customer ID</TableHead>
                    <TableHead>Car</TableHead>
                    <TableHead>Date Start</TableHead>
                    <TableHead>Date end</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id} className="border-b border-gray-200">
                        <TableCell className='font-medium'>
                            {new Date(order.createAt).toLocaleDateString("es-Es", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"
                            })}
                        </TableCell>
                        <TableCell className='font-medium max-w-[100px] truncate'>
                            {order.userId}
                        </TableCell>
                        <TableCell>
                            {order.carName}
                        </TableCell>
                        <TableCell>
                            {new Date(order.orderDate).toLocaleDateString("es-Es", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"
                            })}
                        </TableCell>

                        <TableCell>
                            {new Date(order.orderEndDate).toLocaleDateString("es-Es", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"
                            })}
                        </TableCell>
                        <TableCell className='text-right'>
                            {formatPrice(Number(order.totalAmount))}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5} className=''>Total</TableCell>
                    <TableCell className='font-medium text-right'>{formatPrice(totalAmount)}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>

    )
}
