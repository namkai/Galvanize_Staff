import * as type from '../constants/actionTypes';
import initialState from './initialState';

// Tag_Reducer - Change the current tag state to specifically display a certain group of staff
export default function (state = initialState.tag, action) {
  switch (action.type) {
    case type.UPDATE_TAG:
      return action.payload
    default:
      return state;
  }
}
