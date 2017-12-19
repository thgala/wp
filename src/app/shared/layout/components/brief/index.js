import './index.scss'

import React, { Component } from 'react'
import bem from 'react-bem-classes'
import Container from 'app/shared/layout/components/container'

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

          </div>
        </Container>
      </div>
    );
  }
}

export default Layout_Brief
