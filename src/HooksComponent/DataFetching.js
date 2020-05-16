import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})

    const [id, setId] = useState(1)

    const [error, seterror] = useState()

    const [idFrombuttonclick, setidFrombuttonclick] = useState(1)

    const handleClick = () => {
        setidFrombuttonclick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
                seterror(err)
            })
    }, [idFrombuttonclick])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
            <button type='button' onClick={handleClick}>Fetch post</button>
            <h2>{error}</h2>
            {/*<ul>
                {posts.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul>*/}
            <h1>{post.title} </h1>
        </div>
    )
}

export default DataFetching
