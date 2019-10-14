import React from 'react';

const FuctionProps = (props) => {
    return  (
        <div>
            <h1>Props</h1>
            <h3>Welcome {props.firstName} Singh {props.lastName}</h3>
            {props.children}
        </div>
       )
    }
export default FuctionProps