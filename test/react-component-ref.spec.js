import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import SomeComponentRef from './react-components/some-component-ref';

describe('React-Component-Ref', () => {
    it('should render a component', () => {
        const wrapper = mount(<SomeComponentRef />);
        const button = wrapper.find('button');

        assert.equal(button.length, 1);
    });

    it('should apply overflow style', () => {
        const wrapper = mount(<SomeComponentRef />);
        const button = wrapper.find('button');

        assert.equal(button.getDOMNode().style.overflow, 'hidden');
    });
});
