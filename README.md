# lab35-actions & lab36-redux

Create all the state management for a blog. All state should be stored
locally only. Here is an example: https://demo.alchemycodelab.io/redux-blog/

## Blog Action

* create `src/actions/postActions.js`
  * posts have a title and body
  * you can create a post
  * you can delete a post
  * BONUS: you can update a post by passing an id and new body

## Blog Reducers

* create `src/reducers/postReducer.js`
  * store an array of posts
  * handle create a post
  * handle delete a post
  * BONUS: handle update a post by index

Refactor your blog to use redux:
## Blog Combine Reducers

* create `src/actions/commentActions.js`
  * create an action to create a comment for a post (by post index)
  * create an action to delete a comment for a post (by post index and comment index)
* create `src/reducers/commentReducer.js`
  * store comments for each post (create an object where the key is a posts index)
    and the value is an array of comments
  * handle create a comment
  * handle delete a comment
  * delete post should also delete all comments
