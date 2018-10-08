import moment from 'moment';
export default class PostModel {
  static types = [
    'pin',
    'instagram_media',
    'youtube_video',
    'article',
    'tweet',
    'facebook_status'
  ];

  constructor(json, type) {
    this.id = json.id;
    this.timestamp = json.timestamp;
    this.type = type;
  }

  /**
   *
   * @returns {*|moment.Moment}
   */
  getMoment() {
    return moment(this.timestamp);
  }
}