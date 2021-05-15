import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/websActions'

const Webs = ({fetchPosts, webs}) => {
    useEffect(() => {
        fetchPosts()        
    }, [fetchPosts])

    return (
        <div className="test">
            <h2>Recent Webs</h2>
            {webs.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state =>({
    webs: state.webs.posts
})

export default connect(mapStateToProps, {fetchPosts})(Webs)
