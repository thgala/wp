import './index.scss';

import React, { Component } from 'react';
import bem from 'react-bem-classes';


@bem({
  block: 'layoutFlexWrap',
  modifiers: ['columnDirection', 'flexOne', 'bottomMargin', 'bottomTop']
})
export default class LayoutFlexWrap extends Component {
  render() {
    return (
      <div className={this.block()}>
        {this.props.children}
      </div>
    );

  }
}
