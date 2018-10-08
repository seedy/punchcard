import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostModel from './post.model';
import {listPost} from "../post/post.actions";
import {RefreshButton} from "../refresh/refreshButton";
import CardContainer from './card.container';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.types = PostModel.types;
  }

  componentDidMount() {
    this._onRefresh();
  }

  _onRefresh() {
    this.props.dispatch(listPost());
  }

  render() {
    return (
      <div>
        <div>
          {this.types.map((type) => (
            <CardContainer key={type} type={type}/>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    posts: state.posts,
    error: state.error
  };
};

export default connect(mapStateToProps)(CardList);