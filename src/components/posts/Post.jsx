import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { deleteComment } from '../../actions/commentActions';
import CommentForm from '../form/CommentForm';
import CommentList from '../comments/CommentList';

const Post = ({ title, body, postIndex, commentIndex }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
    dispatch(deleteComment(postIndex, commentIndex));
  };

  return (
    <div>
      <p><strong>{title}</strong></p>
      <p>{body}</p>

      <CommentForm postIndex={postIndex} />
      <CommentList commentIndex={commentIndex} />

      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

Post.propTypes = {
  postIndex: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  commentIndex: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    commentIndex: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
  }))
};

export default Post;

