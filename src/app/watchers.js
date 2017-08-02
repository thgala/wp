import watch from 'redux-watch';
import isObjEqual from 'lodash.isequal';
import { createSelector } from 'reselect';


function watcher(store, selector, action){
  let w = watch(() => selector(store.getState()), isObjEqual);

  store.subscribe(w(action))
}