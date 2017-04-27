import * as type from '../constants/actionTypes';
import initialState from './initialState';

export default function (query = initialState.query, action) {
  switch (action.type) {
    case type.UPDATE_QUERY:
      return action.payload;
    default:
      return query;
  }
}

