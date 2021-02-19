import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';


export default function CommentList({ comments }) {
  return (
    <ul>
      {
        comments.map((comment, postIndex) => {
          return (
            <li key={postIndex}>
              <Comment postIndex={postIndex} comment={comment}/>
            </li>
          );
        })
      }
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string.isRequired)
};
