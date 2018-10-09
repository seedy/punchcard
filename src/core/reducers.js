import {combineReducers} from 'redux';

import {error} from './error/error.reducer';
import {stats, posts} from './post/post.reducer';


const statReducers = {
  pinStats: stats('pin'),
  instagram_mediaStats: stats('instagram_media'),
  youtube_videoStats: stats('youtube_video'),
  articleStats: stats('article'),
  tweetStats: stats('tweet'),
  facebook_statusStats: stats('facebook_status')
};

const postReducers = {
  pin: posts('pin'),
  instagram_media: posts('instagram_media'),
  youtube_video: posts('youtube_video'),
  article: posts('article'),
  tweet: posts('tweet'),
  facebook_status: posts('facebook_status')
};
const reducers = Object.assign(postReducers, statReducers, {error});
export default combineReducers(reducers);