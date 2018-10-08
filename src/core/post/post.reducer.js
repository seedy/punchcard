import {LISTPOST, LISTPOSTSUCCESS, LISTPOSTFAIL} from "./post.actions";

export function posts(state = [], action) {
  switch(action.type) {
    case LISTPOST:
    case LISTPOSTFAIL:
      return [];
    case LISTPOSTSUCCESS:
      return action.payload;
    default: return state;
  }
}