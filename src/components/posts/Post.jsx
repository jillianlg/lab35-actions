import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { deleteComment } from '../../actions/commentActions';
import CommentForm from '../form/CommentForm';
import CommentList from '../comments/CommentList';

const Post = ({ title, body, postIndex, comments }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
    dispatch(deleteComment(postIndex));
  };

  return (
    <div>
      <p><strong>{title}</strong></p>
      <p>{body}</p>

      <CommentForm postIndex={postIndex} />
      <CommentList comments={comments}/>

      <button onClick={handleClick}>Delete Post</button>
    </div>
  );
};

Post.propTypes = {
  postIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Post;

