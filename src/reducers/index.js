import { combineReducers } from 'redux';

import member from './member_reducer';
import query from './query_reducer';
import staff from './staff_reducer';
import tag from './tag_reducer';

const rootReducer = combineReducers({
  staff,
  query,
  member,
  tag,
});

export default rootReducer;
