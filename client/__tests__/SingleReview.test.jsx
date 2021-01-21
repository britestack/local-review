import React from 'react';
import SingleReview from '../components/SingleReview.jsx';
import { shallow } from 'enzyme';

describe('<SingleReview/>', () => {
  it('SingleReview component exists', () => {
    const wrapper = shallow(<SingleReview />)
    // const FeatureItem = wrapper.find('FeatureItem')
    // console.log(wrapper.debug());
    // expect(wrapper.children().text()).toBe('Features component!')
  });
});