import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';


@bem({
  block: 'studioPromo'
})
export default class Studio_Promo extends Component {
  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('description')}>
          Wavepuzzle is a sound design studio offering original
          and custom music, sound packs, sound effects for advertising,
          applications, games, films and other.
        </div>
      </div>
    );
  }
}
