import React, { useState } from 'react';



function Button() {
    let [count, setCount] = useState(0);

    return (
    <button
        onClick={() => setCount(++count)}
    >
        You clicked {count} times
    </button>);
}

export default Button;