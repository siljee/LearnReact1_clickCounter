import React from 'react';

function Button(props) {

    return (
    <button
        onClick={props.incrementCount}
    >
        Click me!
    </button>);
}

export default Button;