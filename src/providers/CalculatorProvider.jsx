// CalculatorProvider.js
import React, { useReducer, useState } from 'react';
import CalculatorContext from '../context/CalculatorContext';

const initialState = {
    displayValue: "0",
    firstValue: null,
    waitingForSecondValue: false,
    operator: null,
    expenses: [],
};

const calculatorReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_DIGIT":
            if (state.waitingForSecondValue) {
                return {
                    ...state,
                    displayValue: action.payload,
                    waitingForSecondValue: false,
                };
            }
            return {
                ...state,
                displayValue: state.displayValue === "0" ? action.payload : state.displayValue + action.payload,
            };
        case "CHOOSE_OPERATOR":
            if (state.operator && state.waitingForSecondValue) {
                return { ...state, operator: action.payload };
            }
            return {
                ...state,
                firstValue: state.displayValue,
                waitingForSecondValue: true,
                operator: action.payload,
            };
        case "CLEAR":
            return initialState;
        case "CALCULATE":
            if (state.operator && state.firstValue != null) {
                const result = eval(`${state.firstValue} ${state.operator} ${state.displayValue}`);
                return {
                    ...state,
                    displayValue: String(result),
                    firstValue: result,
                    waitingForSecondValue: false,
                    operator: null,
                };
            }
            return state;
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
                displayValue: "0",
            };
        default:
            return state;
    }
};

const CalculatorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    return (
        <CalculatorContext.Provider value={{ state, dispatch }}>
            {children}
        </CalculatorContext.Provider>
    );
};

export default CalculatorProvider;
