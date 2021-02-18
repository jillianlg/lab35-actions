import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from 'react-redux';

const PostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createPost({ title, body }));
  };

  return (
    <>
      <h3>Bloger McBlogerson:</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="post title" 
          value={title} 
          onChange={({ target }) => setTitle(target.value)}
        />
        <br />
        <textarea
          type="text" 
          placeholder="add post" 
          value={body} 
          onChange={({ target }) => setBody(target.value)}
        /> 
        <br />
        <button>Submit Post</button>
      </form>
    </>
  );
};

export default PostForm;
