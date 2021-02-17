import { createPost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('adds a post post with CREATE_POST action', () => {
    const state = {
      posts: []
    };

    const action = createPost({ 
      title: 'post title', 
      body: 'post post text area' });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{ title: 'post title', body: 'post post text area' }]
    });
  });
});
