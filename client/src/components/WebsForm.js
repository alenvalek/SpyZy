import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../actions/websActions';

const WebsForm = ({addPost}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSumbit = (e) => {
        e.preventDefault();
    
        const post = {
            title,
            body
        }
        addPost(post);
    }


    return (
        <div>
            <h1>Add a web</h1>
            <form onSubmit={e => onSumbit(e)}>
                <label>Title</label> <br/>
                <input name="title" type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                    <br/>
                <label>Body</label> <br/>
                <textarea name="body" value={body} onChange={e => setBody(e.target.value)}></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

const mapStateToProps = state =>({
    webs: state.webs.posts
})

export default connect(mapStateToProps, {addPost})(WebsForm)
