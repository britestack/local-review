import React from 'react';
import Features from '../components/Features.jsx';
import { shallow } from 'enzyme';

describe('<Features/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Features />);
  });
  it('Feature Item component exists', () => {
    expect(wrapper.find('FeatureItem')).toExist();
  });
  it('Toggle button exists', () => {
    expect(wrapper.find('Features__StyledButton')).toExist();
  });
  it('Features__StyledFeatures component exists', () => {
    expect(wrapper.find('Features__StyledFeatures')).toExist();
  });
});


