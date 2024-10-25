import React from 'react'
import AllNews from '../components/News/AllNews'

export default function News() {
    return (
        <>
            <div className='mt-5 flex flex-wrap gap-10 justify-center'>
                <AllNews />
                <AllNews />
                <AllNews />
                <AllNews />
                <AllNews />
                <AllNews />
            </div>
        </>
    )
}
