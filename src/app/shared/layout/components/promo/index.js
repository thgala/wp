import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';
import FullScreen from 'react-fullscreen';
import Appear from 'app/shared/layout/components/appear';
import Container from 'app/shared/layout/components/container';

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
      <Appear>
        <div className={this.block()}>
          <Container>
            <div className={this.element('content')}>
              <div className={this.element('description')}>
                <span>Wavepuzzle</span> is a <span>sound design studio </span>
                offering original and custom music,
                sound packs, sound effects for advertising,
                applications, games, films and other.
              </div>
            </div>
          </Container>
        </div>
      </Appear>
    );
  }
}
