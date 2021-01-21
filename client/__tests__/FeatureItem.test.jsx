import React from 'react';
import FeatureItem from '../components/FeatureItem.jsx';
import { shallow } from 'enzyme';

describe('<FeatureItem/>', () => {
  it('Feature item exists', () => {
    const wrapper = shallow(<FeatureItem />)
    // const FeatureItem = wrapper.find('FeatureItem')
    // console.log(wrapper.debug());
    // expect(wrapper.children().text()).toBe('Features component!')
  });
});