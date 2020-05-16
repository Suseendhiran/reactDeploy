import React, { useState, useEffect } from 'react'

function UseEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('Rendering Useeffect')
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type='text' name={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default UseEffect
