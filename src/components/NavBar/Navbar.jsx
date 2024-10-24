import React from 'react'
import car from "../../assets/car.svg"
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    return (
        <>
            <div className="nav flex items-center justify-around pb-2 pt-1 md:pt-2 md:pb-4" style={{
                background: "linear-gradient(to right, #704e6b, #6b9bd5, #18051C)"
            }}>
                <div className='logo'>
                    <div>
                        <img src={car} alt="_logo.svg" className='size-8 md:size-14' />
                    </div>
                </div>

                <div className='font-bold text-sm md:text-2xl'>
                    Car Repair
                </div>

                <div className="icons">
                    <div>
                        <CgProfile className='size-6 md:size-9 text-black' />
                    </div>
                </div>
            </div>
        </>
    )
}
