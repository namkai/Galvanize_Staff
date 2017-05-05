import { createSelector } from 'reselect';


// Grabs staff piece of state from store
const staffSelector = state => state.staff;

// Grabs tag piece of state from store
const tabSelector = state => state.tag;

// Filters the selected staff based on their associated tag
const getStaff = (staff, tag) => staff.filter(s => tag === 'ALL' ? staff : s.tag.includes(tag));

export default createSelector(
  staffSelector,
  tabSelector,
  getStaff,
);
