import React, { useState } from 'react'
import useCounter from './useCounter'

function Countertwo() {
    const [count, increment, decrement, reset] = useCounter(5, 3)

    return (
        <div>
            Counter two - {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Countertwo
