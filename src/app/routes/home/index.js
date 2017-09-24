import Layout_Component_Topmenu from 'app/shared/layout/components/topmenu';
import Layout_Component_TopmenuWaypoint from 'app/shared/layout/components/topmenuWaypoint';
import Layout_Component_Promo from 'app/shared/layout/components/promo';
import Portfolio_Component_Filter from 'app/shared/portfolio/components/filter';
import Portfolio_Component_List from 'app/shared/portfolio/components/list';
import Studio_Component_Promo from 'app/shared/studio/components/promo';
import Studio_Component_PhotoList from 'app/shared/studio/components/photoList';
import Contacts_Component_Promo from 'app/shared/contacts/components/promo';

import Portfolio from 'app/modules/portfolio';
import Layout from 'app/modules/layout';
import Appear from 'app/shared/layout/components/appear';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector, createStructuredSelector } from 'reselect';


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
      <Appear>
        <Layout_Component_Topmenu
          showFixed={layoutTopmenu.showFixed}
        />
        <Layout_Component_Promo />
        <Layout_Component_TopmenuWaypoint
          fixedMenuTrigger={layoutActions.fixedMenuTrigger}
        />
        <Portfolio_Component_List
          data={portoflioList.data}
        />
        <Studio_Component_Promo />
        <Studio_Component_PhotoList />
        <Contacts_Component_Promo />
      </Appear>
    );
  }
}
        // <Portfolio_Component_Filter
        //   data={portoflioFilter.data}
        // />