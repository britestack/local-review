import React from 'react';
import App from '../components/App.jsx';
import { shallow } from 'enzyme';

describe('<App/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('App component exists', () => {
    expect(wrapper.find('h3').text()).toEqual('What Locals Say about Marina');
  });
  it('Features component exists', () => {
    expect(wrapper.find('Features')).toExist();
  });
  it('Reviews component exists', () => {
    expect(wrapper.find('Reviews')).toExist();
  });
});