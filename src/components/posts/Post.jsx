import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/PostProvider';
import { deletePost } from '../../actions/postActions';

const Post = ({ title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
  };

  return (
    <div>
      <p><strong>{title}</strong></p>
      <p>{body}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;

