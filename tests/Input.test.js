import React from 'react';
import { Input } from '../src/components/Input';
import { shallow } from 'enzyme';

describe('Input', () => {
  it('Welcome renders its child components', () => {
    const input = shallow(<Input />);
    expect(input).toMatchSnapshot();
  });
});
