import Layout from './modules/layout';
import Form from './modules/form';
import Router from './modules/router';
import Portfolio from './modules/portfolio';

export default {  
  [Layout.constants.MODULE_NAME]: Layout.reducer,
  [Form.constants.MODULE_NAME]: Form.reducer,
  [Router.constants.MODULE_NAME]: Router.reducer,
  [Portfolio.constants.MODULE_NAME]: Portfolio.reducer,
}