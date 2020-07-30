import { shallow } from 'enzyme';
import React from 'react';
import { describe, expect, it } from '@jest/globals';
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from 'enzyme';
import { AdminOrderList } from '../components/AdminOrderList';

Enzyme.configure({ adapter: new Adapter() });

describe('AdminOrderList', () => {
  it('AdminOrderList shows "AdminOrderList"', () => {
    const app = shallow(<AdminOrderList />);
    expect(app.find('List').text());
  });
});
