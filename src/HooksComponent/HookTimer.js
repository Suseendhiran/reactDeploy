import React, { useEffect, useState, useRef } from 'react'

function HookTimer() {

    const [Timer, setTimer] = useState(0)

    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 10000)
        return () => {
            clearInterval(intervalRef.current)
        }

    }, [])

    return (
        <div>
            Hook Timer - {Timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Hook timer</button>
        </div>
    )
}

export default HookTimer
