import { getPosts } from './postSelector';

describe('post selector', () => {
  it('selects the list of posts from state', () => {
    const state = {
      post: [{ title: 'post title', body: 'post text body' }]
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{ title: 'post title', body: 'post text body' }])
  });
});