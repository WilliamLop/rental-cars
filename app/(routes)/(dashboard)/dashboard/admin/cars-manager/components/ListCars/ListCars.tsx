import React from 'react'
import { ListCarsProps } from './ListCars.types'
import CardCar from './CardCar/CardCar'

export function ListCars( props: ListCarsProps) {

    const { cars } = props
  return (
    <div className='grid sm:grid-cols-2 gap-6 my-4 lg:grid-cols-3 2xl:grid-cols-4'>
        {cars.map((car) => (
            <CardCar car={car} key={car.id}/>
        ))}
    </div>
  )
}