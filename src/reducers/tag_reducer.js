import * as type from '../constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.tag, action) {
  switch (action.type) {
    case type.UPDATE_TAG:
      return action.payload
    default:
      return state;
  }
}
