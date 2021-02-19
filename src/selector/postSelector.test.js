/* eslint-disable max-len */
import { getPosts } from './postSelector';

describe('post selector', () => {
  it('selects the list of posts from state', () => {
    const state = {
      // posts: [{ title: 'post title', body: 'post text body' }]
      posts: {
        posts: 
        {
          0: [{ title: 'post title', body: 'post text body' }]
        }
      }
      
    };

    const posts = getPosts(state);

    expect(posts).toEqual({ 0: [{ title: 'post title', body: 'post text body' }] });

  });  
});
