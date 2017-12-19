import './index.scss'

import React, { Component } from 'react'
import bem from 'react-bem-classes'

@bem({
  block: 'layoutTitle'
})
class Layout_Title extends Component {
  render() {
    const { text, } = this.props

    return !text ? null : (
      <div className={this.block()}>
        <h2>{text}</h2>
      </div>
    )
  }
}

export default Layout_Title
