import { shallow } from 'enzyme';
import React from 'react';
import { Tabs } from '../src/components/Tabs';


describe('Tabs', () => {
  it('Welcome renders its child components', () => {
    const tabs = shallow(<Tabs />);
    expect(tabs).toMatchSnapshot();
  });
});