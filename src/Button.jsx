import React from 'react';

function Button(props) {

    return (
    <button
        onClick={() => props.incrementCount(props.increment)}
    >
        + {props.increment}
    </button>);
}

export default Button;