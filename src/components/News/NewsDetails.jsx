import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function NewsDetail() {
    const { newsId } = useParams();
    const location = useLocation();
    const { tag, title, author, text } = location.state || {};



    return (
        <>

            <div className='flex justify-center'>

                {/* <div className=" bg-slate-500 card mt-20 w-96 h-96 border shadow-xl flex flex-col place-items-center justify-center p-16 rounded-3xl"> */}
                <div className="mt-16">
                    <div className=''>
                        <p className='text-sm'>new_id: {newsId}</p>
                    </div>
                    <div className='bg-emerald-700 p-10 rounded-2xl'>
                        <h2 className='text-2xl text-center font-bold'>{title}</h2>
                        <p className='text-sm font-extralight '>{tag}</p>
                        <p className='text-sm font-mono'>{author}</p>
                        <div className="container">
                            <p className='text-lg font-serif'>
                                {text}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}