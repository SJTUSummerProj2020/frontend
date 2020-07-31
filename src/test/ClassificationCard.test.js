/* eslint-disable no-undef */
import {shallow} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
import {ClassificationCard} from "../components/ClassificationCard";

Enzyme.configure({ adapter: new Adapter() });

describe('ClassificationCard', () => {
    it('ClassificationCard shows null', () => {
        const app = shallow(<ClassificationCard goods={null}/>);
        expect(app).toEqual({});
    });
    it('ClassificationCard title', () => {
        const app = shallow(
            <ClassificationCard
                classification={"Test"}
                goods={{goodsId:1, image:null, name:null, goodsDetails:[]}}
            />
            );
        expect(app.find('span')).toEqual("Test");
        });
});
