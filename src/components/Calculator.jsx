import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const calculate = () => {
        try {
            setResult(eval(input));
            setInput('');
        } catch (error) {
            alert('Invalid Calculation');
            setInput('');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult(0);
    };

    const handleKeyDown = (event) => {
        const key = event.key;
        if (/[0-9]/.test(key)) {
            handleClick(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Escape' || key === 'c') {
            clearInput();
        } else if (key === 'Backspace') {
            setInput((prev) => prev.slice(0, -1));
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="max-w-xs mx-auto p-5 border border-gray-400 rounded-lg shadow-lg mt-10">
            <h2 className="text-center text-2xl font-semibold mb-4">Simple Calculator</h2>
            <div className="bg-gray-100 text-right p-4 rounded mb-3 text-2xl">
                {input || result}
            </div>
            <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, '+'].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleClick(value.toString())}
                        className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        {value}
                    </button>
                ))}
                {[4, 5, 6, '-'].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleClick(value.toString())}
                        className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        {value}
                    </button>
                ))}
                {[7, 8, 9, '*'].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleClick(value.toString())}
                        className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        {value}
                    </button>
                ))}
                {[0, 'C', '=', '/'].map((value) => (
                    <button
                        key={value}
                        onClick={
                            value === '=' ? calculate : value === 'C' ? clearInput : () => handleClick(value.toString())
                        }
                        className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
