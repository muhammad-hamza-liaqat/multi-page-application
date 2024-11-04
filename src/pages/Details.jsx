import React from 'react';

const Details = React.memo(({ msg }) => {
    console.log("Details component rendered");
    return (
        <div>
            <p>{msg}</p>
        </div>
    );
});

export default Details;