import initialState from './initialState';

// Staff_Reducer - Only role is to return staff state.
export default function (state = initialState.staff, action) {
  switch (action.type) {
    default:
      return state;
  }
}
