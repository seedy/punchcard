import { call, apply, put, take, takeLatest } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga'
import {LISTPOST, listPostFail, listPostSuccess} from "./post.actions";
import PostService from "../api/post.service";

function sse(eventSrc) {
  return eventChannel((emitter) => {
    eventSrc.onmessage = (msg) => {
      emitter(PostService.parseResult(msg.data));
    };
    eventSrc.onerror = () => {
      emitter(END);
    };
    return () => eventSrc.close();
  });
}

export function* onListPost() {
  try {
    const eventSrc = yield apply(PostService, PostService.listenToPosts);
    const channel = yield call(sse, eventSrc);
    while(true) {
      const post = yield take(channel);
      yield put(listPostSuccess(post));
    }
  } catch(error) {
    yield put(listPostFail(error));
  }
}

export const postSagas = [
  takeLatest(LISTPOST, onListPost)
];