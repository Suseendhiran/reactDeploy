import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingone() {

    const [post, setPost] = useState({})
    const [error, setError] = useState('')
    const [loading, setloading] = useState(true)

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setPost(response.data)
                setloading(false)
                setError('')
            })
            .catch(errorr => {
                setError('Something went wrong')
                setloading(false)
                setError({})
            })
    })


    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingone
