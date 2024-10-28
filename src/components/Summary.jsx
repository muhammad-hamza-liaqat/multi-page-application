import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'

export default function Summary() {
    const { count } = useContext(CounterContext)
    return (
        <>
            <div className="main">
                <p>The Summary of components are being displayed here:</p>
                <div className="counterDiv">
                    <p> counter: {count} </p>
                </div>
            </div>

        </>
    )
}
