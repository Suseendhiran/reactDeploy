import React, { Component } from 'react'
import { CountContext } from '../App'

export class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }


    logMouseposition = e => {
        console.log('Mouse event called')
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount() {
        console.log('Called')
        window.addEventListener('mousemove', this.logMouseposition)
    }

    componentWillMount() {
        console.log('Component uunmounting')
        window.removeEventListener('mousemove', this.logMouseposition)
    }

    render() {
        return (
            <div>
                X position - {this.state.x}, Y Position - {this.state.y}

            </div>
        )
    }
}

export default ClassMouse
