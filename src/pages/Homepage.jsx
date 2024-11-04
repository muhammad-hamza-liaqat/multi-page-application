import React, { useCallback, useEffect, useState } from 'react'
import Details from './Details';

export default function Homepage() {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     alert("mounted");
    //     return () => {
    //         alert("unmounted component");
    //     };
    // }, []);
    console.log("home page mounted")

    const addByOne = () => {
        setCount((previousCount) => previousCount + 1)
    }

    const passingToDetails = useCallback((text) => {
        return text;
    }, [])


    return (
        <>
            <div>
                <p className='text-center text-2xl'>React, Callback hook</p>
            </div>

            <div className='bg-slate-400 w-1/2 flex flex-col justify-center mt-2 mb-5'>
                <p className='text-center'>
                    count: {count}
                </p>

                <button className='text-white hover:text-red-600 hover:bg-gray-200 p-2' onClick={addByOne}>Add</button>
            </div>

            <Details msg={passingToDetails("hamza")} />

        </>
    )
}
