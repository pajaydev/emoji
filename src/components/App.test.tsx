import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('renders learn react link', () => {
  it('test app component', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  });
});
