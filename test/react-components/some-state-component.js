import React, { Component } from 'react';

export default class SomeStateComponent extends Component {
    clickHand() {
        return this;
    }

    render() {
        return (
          <button onClick={this.clickHand}>Clear Checked</button>
        );
    }
}
