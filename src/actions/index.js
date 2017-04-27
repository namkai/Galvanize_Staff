import * as type from '../constants/actionTypes';

export const updateQuery = data => ({
  type: type.UPDATE_QUERY,
  payload: data,
});

export const updateMember = data => ({
  type: type.UPDATE_MEMBER,
  payload: data,
});

export const updateTag = (data = 'ALL') => ({
  type: type.UPDATE_TAG,
  payload: data,
});
