import {apiConfig} from "../../config/api.config";
import PostModel from "../post/post.model";

export default class PostService {
  static endpoint = apiConfig.stream + '/stream';

  static listenToPosts() {
    return new EventSource(this.endpoint);
  }

  /**
   *
   * @param result
   * @returns {{}}
   */
  static parseResult(result) {
    const obj = JSON.parse(result);
    const type = Object.keys(obj)[0];
    const data = obj[type];
    return this.instantiatePost(data, type);
  }

  static createType() {
    return {
      posts: [],
      postsByDay: this.instantiateByDay()
    }
  }

  static addPost(src, post) {
    if (src[post.type] === undefined) {
      src[post.type] = this.createType();
    }
    src[post.type].posts.push(post);
    const byDayRef = src[post.type].postsByDay[post.getMoment().isoWeekday() - 1];
    byDayRef.count++;
    byDayRef.postsByHour[post.getMoment().hour()]++;
    return src;
  }

  static instantiatePost(json, type) {
    return new PostModel(json, type);
  }

  static instantiateByDay() {
    const arr = new Array(7);
    for (let i=0;i<arr.length;i++) {
      arr[i] = {count: 0, postsByHour: new Array(24).fill(0)};
    }
    return arr;
  }
}