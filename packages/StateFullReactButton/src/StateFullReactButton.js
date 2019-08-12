import React, { Component } from 'react';

class StateFullReactButton extends Component {
    render() {
        const { handleOnclick } = this.props;

        return (
            <button onClick={handleOnclick}>statefull1111111 button</button>
        );
    }
}

export default StateFullReactButton;
