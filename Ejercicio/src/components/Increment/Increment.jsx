import React, { useState } from 'react';

const Increment = () => {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
        setCounter(counter + Number(step));
    };

    const reduce = () => {
        setCounter(counter - Number(step));
    };

    const getNumber = (event) => {
        setStep(Number(event.target.value));
    };

    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={reduce}>-</button>
            <div>{counter}</div>
            <p>Change on</p>
            <button onClick={getNumber} id="btn2" value="2">2</button>
            <button onClick={getNumber} id="btn3" value="3">3</button>
        </div>
    );
};

export default Increment;
