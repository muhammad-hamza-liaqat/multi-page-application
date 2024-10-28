import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'

export default function CounterCom() {
    const { count, increase, decrease } = useContext(CounterContext)
    return (
        <>
            <div className="main flex flex-col justify-center items-center mt-10">
                <h1 className='text-3xl'>Counter: {count}</h1>
                <div className='flex gap-4'>
                    <button className='rounded-xl hover:bg-green-700 p-3 border border-red-600' onClick={increase}>Increase</button>
                    <button className='rounded-xl hover:bg-red-600 p-3 border border-green-600' onClick={decrease}>Decrease</button>
                </div>
            </div>
        </>
    )
}
