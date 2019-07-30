import React, { Component } from 'react';

class StateFullReactButton extends Component {
    render() {
        const { handleOnclick } = this.props;

        return (
            <button onClick={handleOnclick}>statefull button</button>
        );
    }
}

export default StateFullReactButton;
