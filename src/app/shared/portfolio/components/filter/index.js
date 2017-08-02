import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';


@bem({
  block: 'portoflioFilter'
})
export default class Portfolio_Filter extends Component {
  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('list')}>
          <Link
            to={`/portfolio`}
            className={this.element('link', { active: true })}>
            <div><div>All</div></div>
          </Link>
          <Link
            to={`/portfolio/audio`}
            className={this.element('link')}>
            <div><div>Audio</div></div>
          </Link>
          <Link
            to={`/portfolio/video`}
            className={this.element('link')}>
            <div><div>Video</div></div>
          </Link>
        </div>
      </div>
    );
  }
}
