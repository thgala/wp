import Player_Component from 'app/shared/player';

import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';


@bem({
  block: 'portoflioItem'
})
export default class Portfolio_Item extends Component {
  render() {
    const { item, } = this.props

    return (
      <div className={this.block()}>
        <div className={this.element('wrap')}>
          <Player_Component
            videoId={item.videoId}
            bgUrl={item.bgUrl}
            title={item.title}
            description={item.description}
          />
        </div>
      </div>
    );
  }
}
