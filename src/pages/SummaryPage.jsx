import React from 'react'
import Summary from '../components/Summary'
import { useNavigate } from 'react-router-dom'

const SummaryPage = () => {
    const navigate = useNavigate();
    const handleButtonNavigation = () => {
        navigate("/counter")
    }
    return (
        <>
            <Summary />
            <div className='p-3 ml-4 rounded-xl w-36 border border-red-600 hover:bg-slate-500 hover:text-white'>
                <button onClick={handleButtonNavigation}>Counter App</button>
            </div>
        </>
    )
}

export default SummaryPage
