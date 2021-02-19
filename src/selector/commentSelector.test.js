import { getComment } from './commentSelector';

describe('comment selector', () => {
  it('it selects the comment and associated post from state', () => {
    const state = {
      comments: { 0: ['comment 1'] }
    };

    const comments = getComment(state);

    expect(comments).toEqual({ 
      0: ['comment 1']
    });
  });
});
