import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PunchCard} from 'react-punchcard';
import PostModel from "./post.model";
import moment from 'moment';
export class Card extends Component {

  render() {
    const posts = this.props.stats;
    const rows = Array.from(Array(7)).map((val, index) => {
      return {
        id: index,
        label: moment().isoWeekday(index).format('ddd'),
        points: Object.keys(posts).reduce((aggr, stamp) => {
          const mom = moment(parseInt(stamp));
          if(mom.isoWeekday() === index + 1) {
            aggr.push({x: mom.hours(), y: posts[stamp]});
          }
          return aggr;
        }, [])
      };
    });
    return (
      <div>
        <h3>Type {this.props.type} - Total {this.props.total}</h3>
        <ul>
          {rows.map((row) => (
            <li key={row.id}>
              <h3>{row.label}</h3>
              {row.points.map((point) => (
                <span key={point.x}>[{point.x} - {point.y}]</span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Card.propTypes = {
  type: PropTypes.oneOf(PostModel.types),
  stats: PropTypes.any,
  total: PropTypes.number
};

Card.defaultProps = {
  stats: {},
  total: 0
};