import './index.scss'

import React, { Component } from 'react'
import bem from 'react-bem-classes'
import Container from 'app/shared/layout/components/container'
import Player_Component from 'app/shared/player'

@bem({
  block: 'layoutBrief'
})
class Layout_Brief extends Component {
  render() {
    const { note, } = this.props

    return (
      <div className={this.block()}>
        <Container>
          <p className={this.element('note')}>
            {note}
          </p>
          <div className={this.element('highlight')}>
            <Player_Component
              coloredBg
              videoId={'ZPfNgIj2eNU'}
              bgUrl={'https://firebasestorage.googleapis.com/v0/b/wavepuzzle-22357.appspot.com/o/ra-one-shahrukh-khan-kareena-kapoor-hot-photos-5.jpg?alt=media&token=a873be2e-4c9c-4aed-abf9-2b0103cfde4d'}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default Layout_Brief
