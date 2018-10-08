import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PunchCard} from 'react-punchcard';
import PostModel from "./post.model";
import moment from 'moment';
export class Card extends Component {

  render() {
    const rows = this.props.posts.postsByDay.map((obj, index) => {
      return {
        id: index.toString(),
        label: moment().isoWeekday(index).format('ddd'),
        points: obj.postsByHour.map((number, index) => {
          return {x: index + 1, y: number};
        })
      };
    });
    return (
      <PunchCard value={rows}/>
    )
  }
}

Card.propTypes = {
  type: PropTypes.oneOf(PostModel.types),
  posts: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.instanceOf(PostModel)),
    postsByDay: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number,
        postsByHour: PropTypes.arrayOf(PropTypes.number)
      })
    )
  })
};
Card.defaultProps = {
  posts: {
    posts: [],
    postsByDay: new Array(7).fill({count: 0, postsByHour: new Array(24).fill(0)})
  }
};