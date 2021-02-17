import React, { createContext, useReducer } from 'react';
import reducer, { initialState } from '../reducers/postReducer';

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostContext.Provider value={state, dispatch}>
      {children}
    </PostContext.Provider>
  );
};
