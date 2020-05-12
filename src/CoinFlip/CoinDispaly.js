import React, { Component } from 'react';

class CoinDispaly extends Component {
    render() {
        return (
            <div className="CoinDispaly" >
                <img style={{ width: '150px' }} src={this.props.info.imgSrc} alt={this.props.info.side} />
            </div>
        );
    }
}

export default CoinDispaly;
