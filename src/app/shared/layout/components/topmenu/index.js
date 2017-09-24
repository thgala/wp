import Container from 'app/shared/layout/components/container';

import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';


@bem({
  block: 'layoutTopmenu'
})
export default class Layout_Topmenu extends Component {
  render() {

    const
      { showFixed } = this.props,
      topmenuRender = (props = {}) => (
        <div className={this.block(props)}>
          <Container className={this.element('wrap')}>
            <div className={this.element('logo')} />
            <div className={this.element('list')}>
              {props.fixed && (
                <Link
                  to={`/`}
                  className={this.element('link')}>
                  <div>Home</div>
                </Link>
              )}
              <Link
                to={`/portfolio`}
                className={this.element('link')}>
                <div>Portfolio</div>
              </Link>
              <Link
                to={`/studio`}
                className={this.element('link')}>
                <div>Studio</div>
              </Link>
              <Link
                to={`/contacts`}
                className={this.element('link')}>
                <div>Contacts</div>
              </Link>
            </div>
          </Container>
        </div>
      )

    return (
      <div>
        {topmenuRender()}
        {topmenuRender({
          fixed: true,
          show: showFixed
        })}
      </div>
    )
  }
}
