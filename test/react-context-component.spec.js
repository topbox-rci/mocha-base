import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Context from './fakes/context';
import SomeComponent from './react-components/some-context-component';

describe('React-Context-Component', () => {
    it('should render a component', () => {
        const context = { foo: 'boop' }; // eslint-disable-line react/jsx-no-constructed-context-values
        const wrapper = mount(
          <Context.Provider value={context}>
            <SomeComponent />
          </Context.Provider>
        );

        assert.equal(wrapper.text(), context.foo);
    });
});
