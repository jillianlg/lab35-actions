import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, body }) => (
  <div>
    <h2>Blogy McBlogerson</h2>
    <h4>{title}</h4>
    <p>{body}</p>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;

