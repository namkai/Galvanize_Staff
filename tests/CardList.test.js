import React from 'react';
import { CardList } from '../src/components/card/CardList';
import { shallow } from 'enzyme';

describe('CardList', () => {
  it('Welcome renders its child components', () => {
    const cardList = shallow(<CardList />);
    expect(cardList).toMatchSnapshot();
  });
});