import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlashMessage from 'react-flash-message'
;
export default class FlashMessages extends Component {
  render() {
    const { message, timeout } = this.props;
    return (
      <FlashMessage duration={timeout}>{message}</FlashMessage>
    );
  }
}
