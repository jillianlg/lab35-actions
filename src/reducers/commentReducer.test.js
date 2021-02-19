import { createComment, deleteAllComments, deleteComment } from '../actions/commentActions';
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

  it('removes a comment with DELETE_COMMENT action', () => {
    const state = {
      posts: [{
        post:{
          title: 'post title', 
          body: 'post text area',
        }
      }],
      0: ['comment 1'],
      1: ['comment 2']
    };

    const action = deleteComment('comment 1', 0);

    expect(reducer(state, action)).toEqual({
      posts: [{
        post:{
          title: 'post title', 
          body: 'post text area',
        }
      }],
      0: [],
      1: ['comment 2']
    });
  });

  it('removes post and all comments with DELETE_ALL_COMMENTS action', () => {
    const state = {
      posts: [{
        post:{
          title: 'post title', 
          body: 'post text area',
        }
      }],
      0: ['comment 1', 'comment 2'],
    };

    const action = deleteAllComments(0);

    expect(reducer(state, action)).toEqual({
      posts: [{
        post:{
          title: 'post title', 
          body: 'post text area',
        }
      }],
      0: []
    });
  });
});
