import { CREATE_POST } from '../actions/postActions';

export const initialState = {
  posts: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
}
