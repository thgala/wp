import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';
import plyr from 'plyr';


@bem({
  block: 'mediaPlayer'
})
export default class Player extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isReady: false,
      isPlaying: false
    }
  }

  componentDidMount() {
    const
      { options, sourceOptions } = this.props,
      { player } = this.refs;

    this.instance = plyr.setup(player, options)[0];
    this.instance.source(sourceOptions);

    this.instance.on('ready', event => {
      this.setState({
        isReady: true
      })
    });

    this.instance.on('play', event => {
      this.setState({
        isPlaying: true
      })
    });

    this.instance.on('pause', event => {
      this.setState({
        isPlaying: false
      })
    });

    this.instance.on('ended', event => {
      this.setState({
        isPlaying: false
      })
    });
  }

  componentWillUnmount() {
    this.instance.destroy();
  }

  render() {
    const
      { isReady, isPlaying } = this.state,
      { sourceOptions } = this.props;

    return (
      <div className={this.block({
        isReady,
        isPlaying
      })} ref="player">
        {sourceOptions.type === 'audio' ?
          <audio preload="none" />
        : null}
        {sourceOptions.type === 'video' ?
          <video preload="none" />
        : null}
      </div>
    );
  }
}
