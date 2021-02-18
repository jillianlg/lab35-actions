import { countPosts, getPosts } from './postSelector';

describe('post selector', () => {
  it('selects the list of posts from state', () => {
    const state = {
      posts: [{ title: 'post title', body: 'post text body' }]
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{ title: 'post title', body: 'post text body' }]);
  });

  it('selects the number of posts from state', () => {
    const state = {
      posts: [{ title: 'post title', body: 'post text body' }]
    };

    expect(countPosts(state)).toEqual(1);
  });
});
