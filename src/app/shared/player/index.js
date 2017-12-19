import './index.scss'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import bem from 'react-bem-classes'
import YouTube from 'react-youtube'

@bem({
  block: 'mediaPlayer'
})
export default class Player extends Component {

  static defaultProps = {
    options: {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        color: 'white',
        controls: 1,
        iv_load_policy: 3,
        rel: 0,
        modestbranding: 1,
        showinfo: 0,
        start: 0,
      },
    },
    videoId: '',
    onReady() {},
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      showPlayer: false,
      isPlaying: false,
    }

    this.onPlayClick = this.onPlayClick.bind(this)
    this.onPlay = this.onPlay.bind(this)
    this.onEnd = this.onEnd.bind(this)
  }

  onPlayClick() {
    this.setState({
      loading: true,
      showPlayer: true,
    })
  }

  onPlay(e) {
    this.setState({
      isPlaying: true,
    })
  }

  onEnd(e) {
    this.setState({
      loading: false,
      isPlaying: false,
    })
  }

  render() {
    const
      { isPlaying, showPlayer, loading, } = this.state,
      { options, videoId, bgUrl, coloredBg, } = this.props;

    return !videoId ? null : (
      <div className={this.block({ isPlaying, loading, coloredBg, })}>
        <div className={this.element('content')}>
          <div
            className={this.element('bg')}
            style={{ backgroundImage: `url(${bgUrl})`, }}
            onClick={this.onPlayClick}
          />
          <div className={this.element('play')} onClick={this.onPlayClick} />
        </div>
        {showPlayer && (
          <div className={this.element('wrap')}>
            <YouTube
              videoId={videoId}
              opts={options}
              onPlay={this.onPlay}
              onEnd={this.onEnd}
            />
          </div>
        )}
      </div>
    );
  }
}
