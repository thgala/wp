import Container from 'app/shared/layout/components/container';
import Portfolio_Component_Item from './../item';

import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';


@bem({
  block: 'portoflioList'
})
export default class Portfolio_List extends Component {

  static defaultProps = {
    list: [],
  }

  render() {
    const
      { list } = this.props;
      
    return list.length === 0 ? null : (
      <div className={this.block()}>
        <Container>
          <div className={this.element('wrap')}>
            {list.map((item, index) =>
              <Portfolio_Component_Item
                key={index}
                item={item}
              />
            )}
          </div>
        </Container>
      </div>
    )
  }
}
