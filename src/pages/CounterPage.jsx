import React from 'react'
import CounterCom from '../components/CounterCom'
import { useNavigate } from 'react-router-dom'

const CounterPage = () => {
    const nagivate = useNavigate();
    const handleButtonNavigation = () => {
        nagivate("/summary")
    }
    return (
        <>
            <div className="main bg-slate-500 p-2">
                <p className='text-white text-center font-extralight text-2xl'>Hello i am counter application inside react.js application</p>
            </div>
            <CounterCom />
            <button onClick={handleButtonNavigation} className='p-3 ml-4 rounded-xl w-36 border border-red-600 hover:bg-slate-500 hover:text-white'>Go to Summary</button>
        </>
    )
}

export default CounterPage
