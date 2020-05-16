import React, { useState } from 'react'
import useInput from './useInput'

function InputForm() {


    const [firstname, bindFirstname, resetFirstname] = useInput('')
    const [lastname, bindLastname, restLastname] = useInput('')

    const Submithandler = e => {
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetFirstname()
        restLastname()
    }
    return (
        <div>
            <form onSubmit={Submithandler}>
                <label>First Name</label>
                <input {...bindFirstname}></input>
                <label>Last name</label>
                <input {...bindLastname}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default InputForm
