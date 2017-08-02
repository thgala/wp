import { createSelector } from 'reselect';
import { MODULE_NAME } from './../constants';


export const moduleState = state => state[MODULE_NAME];
export const topmenu = createSelector(
  moduleState,
  m => m.topmenu
);
export const globalLoader = createSelector(
  moduleState,
  m => m.globalLoader
);
