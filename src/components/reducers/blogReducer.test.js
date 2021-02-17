import reducer from './blogReducer';

describe('blog reducer', () => {
  it('adds a blog post with CREATE_BLOG action', () => {
    const state = {
      blogs: []
    };

    const action = {
      type: 'CREATE_BLOG',
      payload: { title: 'blog title', body: 'blog post text area' }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [{ title: 'blog title', body: 'blog post text area' }]
    });
  });
});
