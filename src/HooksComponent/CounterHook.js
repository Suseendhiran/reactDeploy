import React, { useState } from 'react'

function CounterHook() {
    const initialvalue = 0


    const [count, setCount] = useState(initialvalue)

    const IncrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count => count + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialvalue)}>Reset</button>
            <button onClick={() => setCount(count => count + 5)}>Increment</button>
            <button onClick={() => setCount(Count => Count - 1)}>Decrement</button>
            <button onClick={IncrementFive}>Increment five</button>
        </div>
    )
}

export default CounterHook
