import 'jsdom-global/register';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import App from './App.jsx';
import UserDetails from '../components/UserDetails.jsx';
import UserStats from '../components/UserStats.jsx';
import Repositories from '../components/Repositories.jsx';
import Footer from '../components/Footer.jsx';

const props = {
  username: 'test',
  results: 2,
  token: ''
};

describe('<App />', () => {
  it('should render all child components', () => {
    const wrapper = mount(<App {...props} />);

    expect(wrapper.containsAllMatchingElements([
      <UserDetails />,
      <UserStats />,
      <hr />,
      <Repositories />,
      <Footer />
    ])).to.equal(true);
  });
  it('should call componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    mount(<App {...props} />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
