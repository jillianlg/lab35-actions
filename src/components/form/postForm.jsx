import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from '../../state/PostProvider';

const PostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createPost({ title, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="post title" 
        value={title} 
        onChange={({ target }) => setTitle(target.value)}/>
      <input 
        type="text" 
        placeholder="add post" 
        value={body} 
        onChange={({ target }) => setBody(target.value)}/>
      <button>Submit Post</button>
    </form>
  );
};

export default PostForm;
