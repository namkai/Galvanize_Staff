import { createSelector } from 'reselect';
import tabSelector from './selected_tab';

// Grabs query state from store.
const querySelector = state => state.query;

// Filters the Cardlist based on selectedTab as well as the current query
const getStaff = (staff, query) => staff.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));

export default createSelector(
  tabSelector,
  querySelector,
  getStaff,
);
