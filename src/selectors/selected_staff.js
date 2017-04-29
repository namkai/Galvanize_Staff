import { createSelector } from 'reselect';
import tabSelector from './selected_tab';

const querySelector = state => state.query;


const getStaff = (staff, query) => staff.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));

//export default createSelector(
//  staffSelector,
//  querySelector,
//  getStaff,
//);

export default createSelector(
  tabSelector,
  querySelector,
  getStaff,
);
