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
  render() {
    const
      { data } = this.props;
      
    return (
      <div className={this.block()}>
        <Container>
          <div className={this.element('wrap')}>
            {data.map((item, index) =>
              <Portfolio_Component_Item
                key={index}
                item={item}
              />
            )}
          </div>
        </Container>
      </div>
    );
  }
}
