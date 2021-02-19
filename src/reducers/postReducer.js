import { DELETE_ALL_COMMENTS } from '../actions/commentActions';
import { CREATE_POST, DELETE_POST } from '../actions/postActions';

export const initialState = {
  posts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      console.log(state.posts);
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      console.log(state.posts);
      return {
        ...state, 
        posts: [...state.posts.slice(0, action.payload),
          ...state.posts.slice(action.payload + 1)],
      };
    default:
      return state;
  }
}
