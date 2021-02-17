import React, { createContext, useReducer } from 'react';

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
const [state, dispatch] = useReducer();

  return (
    <BlogContext.Provider value={}>
      {children}
    </BlogContext.Provider>
  );
};