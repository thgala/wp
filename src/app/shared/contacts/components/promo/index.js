import './index.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bem from 'react-bem-classes';


@bem({
  block: 'contactsPromo'
})
export default class Contacts_Promo extends Component {
  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('wrap')}>

        </div>
      </div>
    );
  }
}
