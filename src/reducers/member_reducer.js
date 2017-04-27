import * as type from '../constants/actionTypes';
import initialState from './initialState';

export default function (state = initialState.member, action) {
  switch (action.type) {
    case type.UPDATE_MEMBER:
      return {
        member: action.payload,
      };
    default:
      return state;
  }
}
