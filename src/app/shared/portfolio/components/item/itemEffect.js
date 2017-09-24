import React, { Component } from 'react';
import Appear from 'app/shared/layout/components/appear';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class ItemEffect extends Component {

  constructor(props){
    super(props)

    this.state = {
      offset: 0,
      opacity: 0
    }
  }

  componentDidMount() {
    this.setState({
      offset: `${getRandomInt(-10, 10)}px`
    })

    setTimeout(() => this.setState({ opacity: 1 }), 1000)
  }

  render() {
    return (
      <div {...this.props}>
        {this.state.opacity !== 0 && (
          <div style={{
            transform: `translateY(${this.state.offset})`,
            opacity: this.state.opacity,
            transition: 'all 0.5s ease'
          }}>
            <Appear>
              {this.props.children}
            </Appear>
          </div>
        )}
      </div>
    )
  }
}
