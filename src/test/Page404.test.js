/* eslint-disable linebreak-style */
import { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from 'enzyme';
import Page404 from '../components/Page404';

Enzyme.configure({ adapter: new Adapter() });

describe('Page404', () => {
  it('Page404 shows "404"', () => {
    const app = shallow(<Page404 />);
    expect(app.find('div').text()).toEqual('404');
  });
});
