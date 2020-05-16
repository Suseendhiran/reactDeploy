import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const Initialstate = {
    post: {},
    error: '',
    loading: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FetchSuccess':

            return {
                post: action.Payload,
                loading: false,
                error: '',

            }
        case 'FetchFail':
            return {
                post: {},
                loading: false,
                error: 'Something went wrong'
            }

        default:
            return state

    }

}

function DataFetchingtwo() {

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicde.com/posts/1')
            .then(response => {
                dispatch({ type: 'FetchSuccess', Payload: response.data })

            })
            .catch(errorr => {
                dispatch({ type: 'FetchFail', Payload: '' })
            })
    }, [])


    const [state, dispatch] = useReducer(reducer, Initialstate)
    return (
        <div>
            <div>
                {state.loading ? 'Loading' : state.post.title}
                {state.error ? state.error : null}
            </div>

        </div>
    )
}

export default DataFetchingtwo
