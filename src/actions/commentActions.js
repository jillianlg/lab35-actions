export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_ALL_COMMENTS = 'DELETE_ALL_COMMENTS';

export const createComment = ({ postIndex, comment }) => ({
  type: CREATE_COMMENT,
  payload: { postIndex, comment }
});

export const deleteComment = (comment, postIndex) => ({
  type: DELETE_COMMENT,
  payload: { comment, postIndex }
});

export const deleteAllComments = (postIndex) => ({
  type: DELETE_ALL_COMMENTS,
  payload: { postIndex }
});
