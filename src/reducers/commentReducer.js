/* eslint-disable max-len */
import { CREATE_COMMENT, DELETE_ALL_COMMENTS, DELETE_COMMENT } from '../actions/commentActions';

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
          ...(state[action.payload.postIndex]
            .filter(comment => comment !== action.payload.comment))
        ]    
      };

    case DELETE_ALL_COMMENTS:
      return {
        ...state,
        [action.payload.postIndex]: []
      };
    default:
      return state;
  }
}
