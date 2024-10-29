import React from 'react';

const NameComponent = ({ name }) => {
    console.log("name component render");

    return (
        <>
            <p className='text-center'> My Name is: {name} </p>
        </>
    );
};

export default React.memo(NameComponent);

// React.memo is used for not rendering the component if their props are not changed
// React.memo is higher order component
// optimized the functional component to prevent it from re-rendering if its props are not being changed.


// whereas, useMemo is a react hook, to memozie the value of a function.
// to avoid recalculation, if the value is passed the same as before.