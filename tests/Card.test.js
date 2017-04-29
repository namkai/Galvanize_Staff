import React from 'react';
import { Card } from '../src/components/Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('Renders a card', () => {
    const card = shallow(<Card />);
    expect(card).toMatchSnapshot();
  });
});