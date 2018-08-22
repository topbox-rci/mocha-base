import React, { Component } from 'react';

// You may not use the ref attribute on functional components because they don’t have instances.
// https://reactjs.org/docs/refs-and-the-dom.html#accessing-refs
export default class SomeComponentRef extends Component {
    componentDidMount() {
        this.button.style.overflow = 'hidden';
    }

    render() {
        return (
          <div>
            <button ref={button => (this.button = button)}>Clear Checked</button>
          </div>
        );
    }
}
