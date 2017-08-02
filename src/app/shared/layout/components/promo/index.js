import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';
import FullScreen from 'react-fullscreen';

const FullScreenWrap = props => (
  <div style={{
      width: props.width,
      height: props.height
    }} {...props}>
    {props.children}
  </div>
)


@bem({
  block: 'layoutPromo'
})
export default class Layout_Promo extends Component {
  render() {
    return (
      <FullScreen>
        <FullScreenWrap className={this.block()}>
          <div className={this.element('bg')} />
          <div className={this.element('content')}>
            <div className={this.element('logo')} />
            <div className={this.element('description')}>
              Wavepuzzle is a sound design studio
              offering original and custom music,
              sound packs, sound effects for advertising,
              applications, games, films and other.
            </div>
          </div>
        </FullScreenWrap>
      </FullScreen>
    );
  }
}
