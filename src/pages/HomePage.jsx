import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Calculator from '../components/Calculator';
import ExpenseList from '../components/ExpenseList';

export default function HomePage() {
    const [view, setView] = useState('calculator'); 

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navbar */}
            <header className="bg-gray-800">
                <Navbar />
            </header>

            {/* Navigation Buttons */}
            <div className="flex justify-center my-4 space-x-4">
                <button
                    onClick={() => setView('calculator')}
                    className={`px-4 py-2 rounded ${view === 'calculator' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                    Calculator
                </button>
                <button
                    onClick={() => setView('expenseList')}
                    className={`px-4 py-2 rounded ${view === 'expenseList' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                    Expense List
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-grow flex justify-center items-center p-6">
                {view === 'calculator' && (
                    <div className="w-full max-w-md">
                        <Calculator />
                    </div>
                )}
                {view === 'expenseList' && (
                    <div className="w-full max-w-lg">
                        <ExpenseList />
                    </div>
                )}
            </main>
        </div>
    );
}
