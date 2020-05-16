import React, { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState('')
    const [y, setY] = useState('')

    const mouseLogposition = e => {
        console.log('Mouse event called')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('Use effect called')
        window.addEventListener('mousemove', mouseLogposition)
        return () => {
            console.log("Component Unmounting")
            window.removeEventListener('mousemove', mouseLogposition)
        }
    }, [])
    return (
        <div>
            X - {x}, Y - {y}
        </div>
    )
}

export default HookMouse
