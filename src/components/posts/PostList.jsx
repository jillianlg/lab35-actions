import React from 'react';
import { getPosts } from '../../selector/postSelector';
import { useSelector } from 'react-redux';
import Post from './Post';
import { getComment } from '../../selector/commentSelector';

const PostList = () => {
  const posts = useSelector(getPosts);
  const allComments = useSelector(getComment);
  console.log(posts);

  const postElements = posts.map((post, postIndex) => {
    const comments = allComments[postIndex] || [] ;
      
    
    return (
      <li key={postIndex}>
        <Post {...post} postIndex={postIndex} comments={comments} />    
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
