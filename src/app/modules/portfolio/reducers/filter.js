import {
  GET_FILTER_LIST,
  GET_FILTER_LIST_SUCCESS,
  GET_FILTER_LIST_ERROR,
} from './../actionTypes';


const defaultState = {
  loading: null,
  error: {},
  data: []
};

export default function (state = defaultState, action) {
  switch (action.type) {

    case GET_FILTER_LIST:
      return Object.assign({}, state, {
        loading: true,
        error: {}
      })

    case GET_FILTER_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.data
      })

    case GET_FILTER_LIST_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })

    default:
      return state;
  }
}
