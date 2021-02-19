import React from 'react';
import { getPosts } from '../../selector/postSelector';
import { useSelector } from 'react-redux';
import Post from './Post';
import { getComment } from '../../selector/commentSelector';

const PostList = () => {
  const posts = useSelector(getPosts);
  const allComments = useSelector(getComment);

  const postElements = posts.map(post => {
    const comments = allComments
      .filter(comment => comment.commentIndex === post.postIndex);

    return (
      <li key={post.postIndex}>
        <Post {...post} comments={comments}/>
      </li>
    );
  });
  return (
    <ul>
      {postElements}
    </ul>
  );
};

export default PostList;
