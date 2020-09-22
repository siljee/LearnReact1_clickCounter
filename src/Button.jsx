import React from 'react';

function Button({incrementCount, increment=100}) {

    return (
    <button
        onClick={() => incrementCount(increment)}
    >
        + {increment}
    </button>);
}

export default Button;