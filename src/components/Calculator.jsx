// Calculator.js
import React, { useContext, useState, useEffect } from 'react';
import CalculatorContext from '../context/CalculatorContext';
import ExpenseModal from './ExpenseModal';

const Calculator = () => {
    const { state, dispatch } = useContext(CalculatorContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = (type, value) => {
        if (type === "ADD_TO_EXPENSE") {
            setIsModalOpen(true);
        } else {
            dispatch({ type, payload: value });
        }
    };

    const handleKeyPress = (e) => {
        if (!isNaN(e.key)) {
            handleButtonClick("INPUT_DIGIT", e.key);
        } else if (["+", "-", "*", "/"].includes(e.key)) {
            handleButtonClick("CHOOSE_OPERATOR", e.key);
        } else if (e.key === "Enter") {
            handleButtonClick("CALCULATE");
        } else if (e.key === "Escape") {
            handleButtonClick("CLEAR");
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div className="bg-gray-100 p-4 max-w-md mx-auto rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Calculator</h2>
            <div className="mb-4 p-2 bg-white rounded shadow text-right">
                <p className="text-3xl font-mono">{state.displayValue}</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {/* Numeric buttons */}
                {["7", "8", "9"].map((num) => (
                    <button key={num} className="bg-gray-200 p-4" onClick={() => handleButtonClick("INPUT_DIGIT", num)}>
                        {num}
                    </button>
                ))}
                <button className="bg-blue-500 text-white p-4" onClick={() => handleButtonClick("CHOOSE_OPERATOR", "/")}>/</button>
                {["4", "5", "6"].map((num) => (
                    <button key={num} className="bg-gray-200 p-4" onClick={() => handleButtonClick("INPUT_DIGIT", num)}>
                        {num}
                    </button>
                ))}
                <button className="bg-blue-500 text-white p-4" onClick={() => handleButtonClick("CHOOSE_OPERATOR", "*")}>*</button>
                {["1", "2", "3"].map((num) => (
                    <button key={num} className="bg-gray-200 p-4" onClick={() => handleButtonClick("INPUT_DIGIT", num)}>
                        {num}
                    </button>
                ))}
                <button className="bg-blue-500 text-white p-4" onClick={() => handleButtonClick("CHOOSE_OPERATOR", "-")}>-</button>
                <button className="bg-gray-200 p-4" onClick={() => handleButtonClick("INPUT_DIGIT", "0")}>0</button>
                <button className="bg-gray-200 p-4" onClick={() => handleButtonClick("INPUT_DIGIT", ".")}>.</button>
                <button className="bg-red-500 text-white p-4" onClick={() => handleButtonClick("CLEAR")}>C</button>
                <button className="bg-blue-500 text-white p-4" onClick={() => handleButtonClick("CHOOSE_OPERATOR", "+")}>+</button>

                <button className="col-span-2 bg-green-500 text-white p-4" onClick={() => handleButtonClick("CALCULATE")}>=</button>
                <button className="col-span-2 bg-purple-500 text-white p-4" onClick={() => handleButtonClick("ADD_TO_EXPENSE")}>Add to Expense</button>
            </div>

            {/* Expense Modal */}
            <ExpenseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Calculator;
