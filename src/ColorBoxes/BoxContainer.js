import React, { Component } from 'react';
import './BoxContainer.css';
import ColorBoxes from './ColorBoxes';


class BoxContainer extends Component {
    static defaultProps = {
        allColors: ["red", "magenta", "yellow", "green"],
        numBoxes: 18
    }
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(
            () => <ColorBoxes colors={this.props.allColors} />
        )
        return (
            <div className="BoxContainer" >
                {boxes}
            </div>
        );
    }
}

export default BoxContainer;
