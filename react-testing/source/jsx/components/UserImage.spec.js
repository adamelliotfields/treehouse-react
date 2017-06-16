import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import UserImage from './UserImage.jsx';

describe('<UserImage />', () => {
  it('should have a div with the photo class', () => {
    const wrapper = render(<UserImage />);
    expect(wrapper.find('div').attr('class')).to.equal('photo');
  });
});
