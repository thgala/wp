import './index.scss';

import React, { Component } from 'react';
import bem from 'react-bem-classes';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

@bem({
  block: 'layoutAppear'
})
export default class LayoutAppear extends Component {

  render() {

    return (
      <ReactCSSTransitionGroup
        transitionName={this.block()}
        transitionAppear={true}
        transitionAppearTimeout={0}

        transitionEnter={false}
        transitionLeave={false}
        component="div"
        className={this.block()}>
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
}
