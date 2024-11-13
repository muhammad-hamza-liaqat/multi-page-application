// ExpenseModal.js
import React, { useState, useContext } from 'react';
import CalculatorContext from '../context/CalculatorContext';

const ExpenseModal = ({ isOpen, onClose }) => {
    const { state, dispatch } = useContext(CalculatorContext);
    // default to MISC
    const [expenseType, setExpenseType] = useState('MISC');
    const [expenseName, setExpenseName] = useState('');

    const handleSave = () => {
        dispatch({
            type: "ADD_EXPENSE",
            payload: {
                type: expenseType,
                name: expenseName,
                amount: parseFloat(state.displayValue),
            },
        });


        setExpenseType('MISC');
        setExpenseName('');

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Add Expense</h2>

                <label className="block mb-2">Expense Type</label>
                <select
                    value={expenseType}
                    onChange={(e) => setExpenseType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                >
                    <option value="Utilities">Utilities</option>
                    <option value="Food">Food</option>
                    <option value="Education">Education</option>
                    <option value="MISC">MISC</option>
                </select>

                <label className="block mb-2">Expense Name</label>
                <input
                    type="text"
                    value={expenseName}
                    onChange={(e) => setExpenseName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block mb-2">Amount</label>
                <input
                    type="text"
                    value={state.displayValue}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded mb-4 bg-gray-100 cursor-not-allowed"
                />

                <div className="flex justify-end space-x-2">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                </div>
            </div>
        </div>
    );
};

export default ExpenseModal;
