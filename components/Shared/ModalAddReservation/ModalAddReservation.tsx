import React, { useState } from 'react'
import { ModalAddReservationProps } from './ModalAddReservation.type'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import { Car } from '@prisma/client'
import CandelarSelector from './CalendarSelector/CandelarSelector'
import { addDays } from 'date-fns'
import { DateRange } from 'react-day-picker'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'


export function ModalAddReservation(props: ModalAddReservationProps) {

    const { car } = props;
    const [dateSelected, setDateSelected] = useState<{
        from: Date | undefined;
        to: Date | undefined;
    }>({
        from: new Date(),
        to: addDays(new Date(), 5),
    });

    const onReserveCar = async (car: Car, dateSelected: DateRange) => {
        const response = await axios.post("/api/checkout", {
            carId: car.id,
            priceDay: car.priceDay,
            startDate: dateSelected.from,
            endDate: dateSelected.to,
            carName: car.name,
        });

        window.location = response.data.url;
        toast({
            title: "Car reserved ✅",
        });
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className='w-full mt-3'>
                    Reservar vehículo
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Selecciona las fechas en las que vas alquilar el coche</AlertDialogTitle>
                    <AlertDialogDescription>
                        <CandelarSelector setDataSelected={setDateSelected} carPriceDay={car.priceDay} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>Reservar vehículo</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
