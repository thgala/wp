import {
  FIXED_MENU_TRIGGER
} from './../actionTypes';


const defaultState = {
  showFixed: false
};

export default function (state = defaultState, action) {
  switch (action.type) {

    case FIXED_MENU_TRIGGER:
      return Object.assign({}, state, {
        showFixed: action.data
      })

    default:
      return state;
  }
}
