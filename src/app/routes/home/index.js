import Layout_Component_Topmenu from 'app/shared/layout/components/topmenu';
import Layout_Component_TopmenuWaypoint from 'app/shared/layout/components/topmenuWaypoint';
import Portfolio_Component_List from 'app/shared/portfolio/components/list';
import Studio_Component_Promo from 'app/shared/studio/components/promo';
import Studio_Component_PhotoList from 'app/shared/studio/components/photoList';
import Contacts_Component_Promo from 'app/shared/contacts/components/promo';

import Layout_Component_Promo from 'app/shared/layout/components/promo';
import Layout_Component_Brief from 'app/shared/layout/components/brief';
import Layout_Component_Title from 'app/shared/layout/components/title';

import Portfolio from 'app/modules/portfolio';
import Layout from 'app/modules/layout';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector, createStructuredSelector } from 'reselect';

import {
  LOGO_NOTE,
  BRIEF_NOTE,
  PORTFOLIO_TITLE,
  PORTFOLIO_LIST,
} from './data'

@connect(
  createStructuredSelector({
    layoutTopmenu: Layout.selectors.topmenu,
    portoflioFilter: Portfolio.selectors.filter,
    portoflioList: Portfolio.selectors.list,
  }),
  dispatch => ({
    layoutActions: bindActionCreators(Layout.actions, dispatch)
  })
)
export default class RouteHome extends Component {

  render() {
    const
      { layoutActions } = this.props,
      { portoflioFilter, portoflioList, layoutTopmenu } = this.props;

    return (
      <div>
        {/* Promo */}
        <Layout_Component_Promo logoNote={LOGO_NOTE} />

        {/* Brief */}
        <Layout_Component_Brief note={BRIEF_NOTE} />

        {/* Portfolio */}
        <Layout_Component_Title text={PORTFOLIO_TITLE} />
        <Portfolio_Component_List list={PORTFOLIO_LIST} />
      </div>
    );
  }
}
// <Layout_Component_Topmenu
// showFixed={layoutTopmenu.showFixed}
// />
// <Layout_Component_TopmenuWaypoint
// fixedMenuTrigger={layoutActions.fixedMenuTrigger}
// />