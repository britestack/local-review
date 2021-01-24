import React from 'react';
import FeatureItem from '../components/FeatureItem.jsx';
import { shallow } from 'enzyme';

describe('<FeatureItem/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FeatureItem />);
  });
  it('Feature Item component exists', () => {
    expect(wrapper.find('Fragment')).toExist();
  });
});