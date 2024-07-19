"use client";
import { Car } from '@prisma/client';
import { FiltersAndListCarsProps } from './FiltersAndListCars.types'
import { useEffect, useState } from 'react';
import ListCars from '../ListCars/ListCars';
import FiltersCars from '../FiltersCars/FiltersCars';


export default function FiltersAndListCars(props: FiltersAndListCarsProps) {

    const { cars } = props

    const [filteredCars, setFilteredCars] = useState<Car[]>()
    const [filters, setFilters] = useState({
        type: "",
        transimission: "",
        engine: "",
        people: ""
    })

    useEffect(() => {
        let filtered = cars

        if(filters.type) {
            filtered = filtered.filter((car) => 
            car.type.toLowerCase().includes(filters.type.toLowerCase())
            );
        }
        if(filters.transimission) {
            filtered = filtered.filter((car) => 
            car.transimission.toLowerCase().includes(filters.transimission.toLowerCase())
            );
        }
        if(filters.engine) {
            filtered = filtered.filter((car) => 
            car.engine.toLowerCase().includes(filters.engine.toLowerCase())
            );
        }
        if(filters.people) {
            filtered = filtered.filter((car) => 
            car.people.toLowerCase().includes(filters.people.toLowerCase())
            );
        }

        setFilteredCars(filtered)
    }, [filters, cars])

    const handleFilterChange = (filterName: string, filterValue: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: filterValue
        }))
    }

    const clearFilters = () => {
        setFilters({
            type: "",
            transimission: "",
            engine: "",
            people: ""
        });
    }
    

    console.log(cars)
    return (
        <div>
            <FiltersCars setFilters={handleFilterChange} filters={filters} clearFilters={clearFilters}/>
            <ListCars cars={filteredCars} />
        </div>
    )
}
