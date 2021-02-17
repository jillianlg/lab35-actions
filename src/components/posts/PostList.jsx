import Post from './Post';

const PostList = () => {
  const postElements = posts.map(post => (
    <li key={post.title}>
      <Post />
    </li>
  ));

  return (
    <ul>
      {postElements}
    </ul>
  );
};

export default PostList;
