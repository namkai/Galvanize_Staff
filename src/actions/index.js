import * as type from '../constants/actionTypes';

// Filters the CardList based on the query
export const updateQuery = data => ({
  type: type.UPDATE_QUERY,
  payload: data,
});

// Filters the CardList based on selected tab ex: All, DSI or WDI
export const updateTag = (data = 'ALL') => ({
  type: type.UPDATE_TAG,
  payload: data,
});
