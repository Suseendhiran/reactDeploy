import React, { useEffect, useState } from 'react'
import HookMouse from './HookMouse'
import ClassMouse from './ClassMouse'

function UseeffectCleanup() {

    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <ClassMouse />}
        </div>
    )
}

export default UseeffectCleanup
