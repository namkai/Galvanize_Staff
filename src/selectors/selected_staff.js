import { createSelector } from 'reselect';

const staffSelector = state => state.staff;
const querySelector = state => state.query;


const getStaff = (staff, query) => staff.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));

export default createSelector(
  staffSelector,
  querySelector,
  getStaff,
);
