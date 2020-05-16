import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComp() {

    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(50000)

    const IncrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const IncrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text='Age' count={age}></Count>
            <Button handleClick={IncrementAge}>IncrementAge</Button>
            <Count text='Salary' count={salary}></Count>
            <Button handleClick={IncrementSalary}>IncrementSalary</Button>
        </div>
    )
}

export default ParentComp
