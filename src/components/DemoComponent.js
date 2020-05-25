import React, { useState } from 'react';

const DemoComponent = () => {

    const [count, setCount] = useState(0);
    // here 'count' is the state and 'setCount' is the setState
    // and the parameter of the useState is the initial state

    return (
        <div>
            <button
                onClick={() => setCount(count + 1)}
            >
                {'Increase'}
            </button>
            <button
                onClick={() => setCount(count - 1)}
            >
                {'Decrease'}
            </button>
        </div>
    );
};

export default DemoComponent;
