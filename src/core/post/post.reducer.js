import {LISTPOST, LISTPOSTSUCCESS, LISTPOSTFAIL} from "./post.actions";

/*
Tree model: Objects with indexes
root{
  [type]: { // ex type = 'pin'
    [stamp]: number // stamp = number
  }
}
*/

export function posts(type) {
  return (state = [], action) => {
    switch (action.type) {
      case LISTPOST:
      case LISTPOSTFAIL:
        return [];
      case LISTPOSTSUCCESS:
        const post = action.payload;
        if (post.type !== type) {
          return state;
        }
        return state.concat(post);
      default:
        return state;
    }
  }
}

export function stats(type) {
  return (state = {}, action) => {
    switch (action.type) {
      case LISTPOST:
      case LISTPOSTFAIL:
        return {};
      case LISTPOSTSUCCESS:
        const post = action.payload;
        if (post.type !== type) {
          return state;
        }
        const index = post.getClosestStamp();
        let count = 1;
        if (state[index]) {
          count = state[index] + 1;
        }
        return Object.assign({}, state, {
          [index]: count
        });

      default: return state;
    }
  }
}