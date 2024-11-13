import React from 'react';
import Navbar from '../components/Navbar';
import Calculator from '../components/Calculator';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-gray-800">
                <Navbar />
            </header>

            <main className="flex-grow flex justify-center items-center p-6">
                <div className="w-full max-w-md">
                    <Calculator />
                </div>
            </main>
        </div>
    );
}
