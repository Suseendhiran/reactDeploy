import React, { useRef, useEffect } from 'react'

function FocusInput() {

    const InputRef = useRef(null)

    useEffect(() => {
        InputRef.current.focus()
    }, [])
    return (
        <div>
            <input type='text' ref={InputRef}></input>
        </div>
    )
}

export default FocusInput
