import React, { Component } from 'react';

class StateFullReactButton extends Component {
    render() {
        const { handleOnclick } = this.props;

        return (
            <button onClick={handleOnclick}>react statefull button</button>
        );
    }
}

export default StateFullReactButton;
