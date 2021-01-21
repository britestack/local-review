import React from 'react';
import Features from '../components/Features.jsx';
import { shallow } from 'enzyme';

describe('<Features/>', () => {
  // beforeEach(() => {
  //   const wrapper = mount(<Features />)
  // })
  it('Feature item exists', () => {
    const wrapper = shallow(<Features />)
    // const FeatureItem = wrapper.find('FeatureItem')
    console.log(wrapper.debug());
    // expect(wrapper.children().text()).toBe('Features component!')
  });
});