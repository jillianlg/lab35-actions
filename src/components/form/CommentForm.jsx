import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createComment } from '../../actions/commentActions';
import { useDispatch } from 'react-redux';

export default function CommentForm({ commentIndex, postIndex }) {
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  const submitForm = e => {
    e.preventDefault();

    dispatch(createComment({ comment, postIndex }));
  };

  const updateComment = ({ target }) => {
    const { value: comment } = target;

    setComment(comment);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="comment-body">Comment: </label>
      <input 
        required
        id="comment-body"
        type="text"
        onChange={updateComment}
        value={comment}
      />
      <button>Comment!</button>
    </form>
  );
}

