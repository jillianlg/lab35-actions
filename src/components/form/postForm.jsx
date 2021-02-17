import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
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
