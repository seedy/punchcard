import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export class RefreshButton extends Component {

  _onClick() {
    this.props.onClick();
  }

  render() {
    return (
      <Button color="primary" onClick={() => this._onClick()}>
        Refresh
      </Button>
    )
  }
}

RefreshButton.propTypes = {
  onClick: PropTypes.func.isRequired
};