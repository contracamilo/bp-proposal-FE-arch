/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Button from './index';

Enzyme.configure({ adapter: new EnzymeAdapter() });


test('Renders without Crashing', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toBeTruthy();
});
