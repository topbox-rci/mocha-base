import React from 'react';
import sinon from 'sinon';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import SomeStateComponent from './react-components/some-state-component';

describe('React-State-Component', () => {
    it('should render a component', () => {
        const wrapper = shallow(<SomeStateComponent />);
        const button = wrapper.find('button');

        assert.equal(button.length, 1);
    });

    it('should handle button click', () => {
        const SomeStateComponentPrototype = SomeStateComponent.prototype;
        sinon.spy(SomeStateComponentPrototype, 'clickHand');

        const wrapper = shallow(<SomeStateComponent />);

        wrapper.find('button').simulate('click');

        assert.isTrue(SomeStateComponentPrototype.clickHand.calledOnce);
    });
});
