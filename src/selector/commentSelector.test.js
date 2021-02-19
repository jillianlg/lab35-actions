import { getComment } from './commentSelector';

describe('comment selector', () => {
  it.only('it selects the comment and associated post from state', () => {
    const state = {
      posts: [{
        title: 'post title', 
        body: 'post text area',
      }],
      0: ['comment 1']
    };

    const comments = getComment(state);

    expect(comments).toEqual({ 
      // posts: [{
      //   title: 'post title', 
      //   body: 'post text area',
      // }],
      0: ['comment 1']
    });
  });
});
