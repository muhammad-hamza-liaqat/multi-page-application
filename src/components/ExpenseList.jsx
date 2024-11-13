import React, { useState, useEffect } from 'react';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const [filterType, setFilterType] = useState('All');

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
        setFilteredExpenses(storedExpenses);
    }, []);

    useEffect(() => {
        if (filterType === 'All') {
            setFilteredExpenses(expenses);
        } else {
            setFilteredExpenses(expenses.filter(expense => expense.type === filterType));
        }
    }, [filterType, expenses]);

    const totalAmount = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Expense List</h2>

            <div className="mb-4">
                <label className="block mb-2">Filter by Type:</label>
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="All">All</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Food">Food</option>
                    <option value="Education">Education</option>
                    <option value="MISC">MISC</option>
                </select>
            </div>

            <ul className="mb-4">
                {filteredExpenses.length > 0 ? (
                    filteredExpenses.map((expense, index) => (
                        <li key={index} className="border-b py-2 flex justify-between">
                            <span>{expense.name} ({expense.type})</span>
                            <span>${expense.amount.toFixed(2)}</span>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No expenses available</li>
                )}
            </ul>

            <div className="font-semibold text-lg mt-4">
                Total: ${totalAmount.toFixed(2)}
            </div>
        </div>
    );
};

export default ExpenseList;
