import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

export default function Comment({ comment }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComment(comment));
  };

  return (
    <>
      { comment }
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};
