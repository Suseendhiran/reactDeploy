import React, { useContext } from 'react'
import ComponentE from './ComponentE'
import { UserContext, ChannelContext } from '../App'


function ComponentD() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>

            {user} - {channel}
        </div>
    )
}

export default ComponentD
