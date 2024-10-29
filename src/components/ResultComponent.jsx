import React from 'react';

const ResultComponent = React.memo(({ marks, subject }) => {
    console.log("result component render");

    const percentageCalculation = (marks) => {
        return (marks * 100) / 100;
    };

    return (
        <>
            <p className='text-center'>Marks are: {marks}</p>
            <p className='text-center'>Subject is: {subject}</p>
            <p className='text-center'>Percentage of subject is: {percentageCalculation(marks)}%</p>
        </>
    );
});

export default ResultComponent;
