"use client";

import Navbar from '@/components/Shared/Navbar/Navbar'
import React from 'react'
import FirtsBlock from './components/FirtsBlock/FirtsBlock'
import SliderBrands from './components/SliderBrands/SliderBrands'
import { Features } from './components/Features'
import OurFleet from './components/OurFleet/OurFleet'
import DriveToday from './components/DriveToday/DriveToday'

export default function Home() {
    return (
        <div>
            <Navbar />
            <FirtsBlock />
            <SliderBrands />
            <Features />
            <OurFleet />
            <DriveToday />
        </div>
    )
}