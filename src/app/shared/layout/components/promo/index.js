import './index.scss'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import bem from 'react-bem-classes'
import FullScreen from 'react-fullscreen'
import Container from 'app/shared/layout/components/container'

@bem({
  block: 'layoutPromo'
})
class Layout_Promo extends Component {
  render() {
    const { width, height, logoNote, } = this.props
    const styles = {
      width: `${width}px`,
      height: `${height}px`,
    }

    return (
      <FullScreen>
        <div className={this.block()} style={styles}>
          <div className={this.element('wrap')} style={styles}>
            <Container>
              <div className={this.element('logo')} />
              <div className={this.element('note')}>
                {logoNote}
              </div>
            </Container>
          </div>
        </div>
      </FullScreen>
    );
  }
}

const LayoutPromoWrap = props => (
  <FullScreen>
    <Layout_Promo {...props} />
  </FullScreen>
)

export default LayoutPromoWrap