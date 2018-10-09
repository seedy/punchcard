import {createSelector} from 'reselect';

const getStatsByType = (state, props) => state[props.type+'Stats'];
const getPostsByType = (state, props) => state[props.type];


export const getStatsByTypeSelector = createSelector(
  [getStatsByType],
  (stats) => stats
);

export const getPostsByTypeSelector = createSelector(
  [getPostsByType],
  (posts) => posts
);

export const getCountPostsByTypeSelector = createSelector(
  [getPostsByType],
  (posts) => (posts || []).length
);