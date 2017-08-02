import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';


@bem({
  block: 'studioPhotoList'
})
export default class Studio_PhotoList extends Component {
  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('list')}>

        </div>
      </div>
    );
  }
}
