import { combineReducers } from 'redux';

import query from './query_reducer';
import staff from './staff_reducer';
import tag from './tag_reducer';

const rootReducer = combineReducers({
  staff,
  query,
  tag,
});

export default rootReducer;
