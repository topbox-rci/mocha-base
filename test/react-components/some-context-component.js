import React from 'react';
import Context from '../fakes/context';

const SomeComponent = () => (
  <Context.Consumer>
    {context => <div>{context && context.foo}</div>}
  </Context.Consumer>
);

export default SomeComponent;

