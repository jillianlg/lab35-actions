import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

export default function Comment({ comment, postIndex }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComment(comment, postIndex));
  };

  return (
    <>
      { comment }
      <button onClick={handleDelete}>Delete Comment</button>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  postIndex: PropTypes.number.isRequired
};
