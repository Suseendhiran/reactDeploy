import React, { useState, useEffect } from 'react'
import Count from '../Performance/Count'
import useDocTitle from './useDocTitle'

function DocTitletwo() {

    const [count, setCount] = useState(0)

    useDocTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitletwo
