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

  static instantiatePost(json, type) {
    return new PostModel(json, type);
  }


}