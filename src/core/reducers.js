import {combineReducers} from 'redux';

import {error} from './error/error.reducer';
import {posts} from './post/post.reducer';

export default combineReducers({
  error,
  posts
});