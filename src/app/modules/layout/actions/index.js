import * as at from './../actionTypes';

export function fixedMenuTrigger(flag){
  return (dispatch, getState) => {
    dispatch({
      type: at.FIXED_MENU_TRIGGER,
      data: flag
    })
  }
}
