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
    return moment(this.timestamp * 1000);
  }

  /**
   *
   * @returns {number}
   */
  getDay() {
    return this.getMoment().isoWeekday();
  }

  /**
   *
   * @returns {number}
   */
  getHour() {
    return this.getMoment().hour();
  }

  /**
   *
   * @returns {number}
   */
  getClosestStamp() {
    const thisWeekDay = moment().isoWeekday(this.getMoment().isoWeekday());
    return thisWeekDay.hour(this.getHour()).minutes(0).seconds(0).milliseconds(0).valueOf();
  };

}