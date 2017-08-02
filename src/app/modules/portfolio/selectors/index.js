import { createSelector } from 'reselect';
import { MODULE_NAME } from './../constants';


export const moduleState = state => state[MODULE_NAME];

export const filter = createSelector(
  moduleState,
  m => m.filter
);
export const list = createSelector(
  moduleState,
  m => m.list
);
