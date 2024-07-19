"use client";

import React from 'react'
import { ListCarsProps } from './ListCars.types'
import { Car } from '@prisma/client';
import Image from 'next/image';
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from 'lucide-react';
import { ModalAddReservation } from '@/components/Shared/ModalAddReservation';
import { useLovedCars } from '@/hooks/use-loved-cars';

export default function ListCars(props: ListCarsProps) {
    const { cars } = props
    const {addLovedItem, lovedItems, removeLovedItem} = useLovedCars()

    
    return (
        <section className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 2xl:grid-cols-4">
            {cars.map(( car: Car) => {
                const {id, priceDay, photo, cv, engine, people, name, transimission, type  } = car;

                const likedCar = lovedItems.some((item) => item.id === car.id);


                return (
                    <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
                        <Image src={photo} alt={name} width={400} height={600} className='rounded-lg object-contain aspect-square'/>
                        <div className="p-3">
                            <div className="flex flex-col mb-3 gap-x-4">
                                <p className="text-xl min-h-16 lg:min-h-fit">
                                    {name}
                                </p>
                                <p className="">
                                    {priceDay} $ / día
                                </p>
                            </div>
                            <p className="flex items-center text-base text-muted-foreground">
                                <Gem className="h-4 w-4 mr-2 text-black" strokeWidth={1} />
                                {type}
                            </p>
                            <p className="flex items-center text-base text-muted-foreground">
                                <Wrench className="h-4 w-4 mr-2 text-black" strokeWidth={1} />
                                {transimission}
                            </p>
                            <p className="flex items-center text-base text-muted-foreground">
                                <Users className="h-4 w-4 mr-2 text-black" strokeWidth={1} />
                                {people}
                            </p>
                            <p className="flex items-center text-base text-muted-foreground">
                                <Fuel className="h-4 w-4 mr-2 text-black" strokeWidth={1} />
                                {engine}
                            </p>
                            <p className="flex items-center text-base text-muted-foreground">
                                <Gauge className="h-4 w-4 mr-2 text-black" strokeWidth={1} />
                                {cv} CV
                            </p>

                            <div className="flex items-center justify-center gap-x-3">
                                <ModalAddReservation car={car} />
                                <Heart
                                    className={`mt-2 cursor-pointer animate-bounce ${likedCar && "fill-black animate-in"}`}
                                    onClick={
                                        likedCar 
                                        ? () => removeLovedItem(car.id)
                                        : () => addLovedItem(car)}
                                />
                            </div>
                        </div>
                    </div>
                )
            })}

        </section>
    )
}
