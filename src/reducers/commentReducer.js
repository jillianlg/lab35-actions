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
        // [action.payload.postIndex]: [
        //   ...(state[action.payload.postIndex])
        //     .slice(0, action.payload.postIndex),
        //   action.payload.comment,
        //   ...(state[action.payload.postIndex])
        //     .slice(action.payload.postIndex + 1)
        // ]
        // comments: state.comments.map((comment, i) => {
        //   if(i === action.payload.postIndex)
        //     return action.payload.comment;
        //   return comment;
        // })
      };
    default:
      return state;
  }
}
