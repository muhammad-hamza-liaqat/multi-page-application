import React from 'react'
import CounterCom from '../components/CounterCom'

const CounterPage = () => {
    return (
        <>
            <div className="main bg-slate-500 p-2">
                <p className='text-white text-center font-extralight text-2xl'>Hello i am counter application inside react.js application</p>
            </div>
            <CounterCom />
        </>
    )
}

export default CounterPage
