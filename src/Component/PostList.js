import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errormessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(respone => {
                console.log(respone)
                this.setState({ posts: respone.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errormessage: 'error retrieving data' })
            })
    }

    render() {
        const { posts, errormessage } = this.state
        return (

            < div >
                List of postssss

                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
                {
                    errormessage ? <div>{errormessage}</div> : null
                }
            </div >
        )
    }
}

export default PostList
