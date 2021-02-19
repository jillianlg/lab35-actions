import { createComment, deleteComment } from '../actions/commentActions';
import reducer from './commentReducer';


describe('comment reducer', () => {
  it('adds a comment to a post with CREATE_POST action', () => {
    const state = {
      post: [{
        title: 'post title', 
        body: 'post text area',
      }]
    };

    const action = createComment({
      postIndex: 0,
      comment: 'comment 1'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      post: [{
        title: 'post title', 
        body: 'post text area',
      }],
      0: ['comment 1']
    });
  });

  it('removes a comment with DELETE_POST action', () => {
    const state = {
      posts: [{
        title: 'post title', 
        body: 'post text area',
      }],
      0: ['comment 1']
    };

    const action = deleteComment(0, 0);

    expect(reducer(state, action)).toEqual({
      // comments: []
    });
  });
});
