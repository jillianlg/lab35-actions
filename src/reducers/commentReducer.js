import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...(state[action.payload.postIndex] || []), 
          action.payload.comment
        ]
      };
    case DELETE_COMMENT:

      return {
        ...state,
        [action.payload.postIndex]: [
          ...state[action.payload.postIndex]
            .slice(0, action.payload.commentIndex),
          ...state[action.payload.postIndex]
            .slice(action.payload.commentIndex + 1)
        ]
        // [action.payload.postIndex]: [
        //   ...(state[action.payload.postIndex])
        //     .slice(0, action.payload.postIndex),
        //   action.payload.comment,
        //   ...(state[action.payload.postIndex])
        //     .slice(action.payload.postIndex + 1)
        // ]
    
      };
    default:
      return state;
  }
}
