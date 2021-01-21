import React from 'react';
import App from '../components/App.jsx';
import { shallow } from 'enzyme';

describe('<App/>', () => {
  it('App component exists', () => {
    const wrapper = shallow(<App />)
    // const FeatureItem = wrapper.find('FeatureItem')
    // console.log(wrapper.debug());
    // expect(wrapper.children().text()).toBe('Features component!')
  });
});