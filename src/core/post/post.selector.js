import {createSelector} from 'reselect';

const getPostsByType = (state, props) => state.posts[props.type];

export const getPostsByTypeSelector = createSelector(
  [getPostsByType],
  (posts) => posts
);