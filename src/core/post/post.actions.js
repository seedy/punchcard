export const LISTPOST = 'core/story/LISTPOST_REQUEST';
export const LISTPOSTSUCCESS = 'core/story/LISTPOST_SUCCESS';
export const LISTPOSTFAIL = 'core/story/LISTPOST_FAIL';

/**
 *
 * @returns {{type: string}}
 */
export function listPost() {
  return {type: LISTPOST};
}

/**
 *
 * @param post {PostModel}
 * @returns {{type: string, payload: PostModel}}
 */
export function listPostSuccess(post) {
  return {type: LISTPOSTSUCCESS, payload: post};
}

/**
 *
 * @param error
 * @returns {{type: string, payload: string}}
 */
export function listPostFail(error) {
  return {type: LISTPOSTFAIL, payload: error};
}