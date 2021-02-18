export const getPosts = state => state.post;

export const countPosts = state => getPosts(state).length;
