import { createSelector } from 'reselect';

const staffSelector = state => state.staff;
const tabSelector = state => state.tag;


const getStaff = (staff, tag) => staff.filter(s => tag === 'ALL' ? staff : s.tag.includes(tag));

export default createSelector(
  staffSelector,
  tabSelector,
  getStaff,
);
