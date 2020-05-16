import React, { Component } from 'react'
import Axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log('Error')
            })
    }


    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='userId' value={userId} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type='text' name='body' value={body} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm
