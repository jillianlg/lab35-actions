import { createCOMMENT, deleteCOMMENT } from '../actions/commentActions';
import reducer from './commentReducer';


describe('comment reducer', () => {
  it('adds a comment to a post with CREATE_POST action', () => {
    const state = {
      post: [{
        title: 'post title', 
        body: 'post text area',
        comments: []
      }],
    };

    const action = createCOMMENT({
      body: 'comment 1'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      comments: [{ body: 'comment 1' }]
    });
  });

  it('removes a comment with DELETE_POST action', () => {
    const state = {
      post: [{
        title: 'post title', 
        body: 'post text area',
        comments: ['comment 1']
      }],
    };

    const action = deleteCOMMENT(0, 'comment 1');

    expect(reducer(state, action)).toEqual({
      comments: []
    });
  });
});
