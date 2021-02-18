export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const createCOMMENT = (index, comment) => ({
  type: CREATE_COMMENT,
  payload: { index, comment }
});

export const deleteCOMMENT = (index, comment) => ({
  type: DELETE_COMMENT,
  payload: { index, comment }
});
