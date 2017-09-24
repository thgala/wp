import Player_Component from 'app/shared/player';
import ImageLoader from 'react-imageloader';
import ItemEffect from './itemEffect';

import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';


@bem({
  block: 'portoflioItem'
})
export default class Portfolio_Item extends Component {
  render() {
    const
      { item } = this.props,
      styles = {
        backgroundImage: `url(${require(`./data/${item.image}`)})`
      }

    const wrapper = () => (
      <div className={this.block({
          video: item.media.type === 'video'
        })}>
        <div className={this.element('globalWrap')}>
          <div
            className={this.element('bg')}
            style={styles}
          />
          <div className={this.element('wrap')}>
            <div className={this.element('content')}>
              <div className={this.element('title')}>
                <span>{item.title}</span>
              </div>
              <div className={this.element('caption')}>
                <span>{item.caption}</span>
              </div>
            </div>
            <div className={this.element('player')}>
              <Player_Component
                options={{
                  preload: false
                }}
                sourceOptions={item.media}
              />
            </div>
          </div>
        </div>
      </div>
    )

    const preloader = () => (
      <div className={this.element('imageLoader')}><div /></div>
    )

    return (
      <ImageLoader
        src={require(`./data/${item.image}`)}
        wrapper={wrapper}
        preloader={preloader}
      />
    );
  }
}
