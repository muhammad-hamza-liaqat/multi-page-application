import React, { useMemo } from 'react';

const ResultComponent = React.memo(({ marks, subject }) => {
    console.log("result component render");

    // const percentageCalculation = (marks) => {
    //     return (marks * 100) / 100;
    // };

    const percentageCalculation = useMemo(() => {
        console.log("Calculating percentage");
        console.log("props changed for the percentageCalculation function ");
        return (marks * 100) / 100;
    }, [marks])

    return (
        <>
            <p className='text-center'>Marks are: {marks}</p>
            <p className='text-center'>Subject is: {subject}</p>
            <p className='text-center'>Percentage of subject is: {percentageCalculation}%</p>
        </>
    );
});

export default ResultComponent;

// in this react.memo will check the components props, such as it the component prop is changed or not.
// if you change the subject whole component will render but the percentageCalculation will not changed
// as it is having use memo hook. if the makrs is changed then percentageCalculation will be changed.