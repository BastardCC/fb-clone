import React from 'react'
import CreatePost from './CreatePost'
import Story from './Story'

const Feed = () => {
    return (
        <div style={{color:'white'}}>
            <div>
                <Story/>
            </div>
            <div style={{backgroundColor: '#242526', borderRadius: 10, marginTop: 20}}>
                <CreatePost/>
            </div>
        </div>
    )
}

export default Feed
