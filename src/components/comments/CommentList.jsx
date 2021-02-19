import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';


export default function CommentList({ comments, postIndex }) {
  return (
    <ul>
      {
        comments.map((comment, commentIndex) => {
          return (
            <li key={commentIndex}>
              <Comment postIndex={postIndex} comment={comment}/>
            </li>
          );
        })
      }
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string.isRequired),
  postIndex: PropTypes.number.isRequired
};
