import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe('App', () => {
  it('Welcome renders its child components', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
})
