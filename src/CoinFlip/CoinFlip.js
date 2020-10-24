import React, { Component } from 'react';
import CoinDispaly from './CoinDispaly';

class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let value = Math.floor(Math.random() * this.props.coins.length);
        const newCoin = this.props.coins[value];
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            };
        });
    }
    render() {
        return (
            <div className="CoinFlip" >
                <h1>Let's flip a coin</h1>
                {this.state.currCoin && <CoinDispaly info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip it!</button>
                <p> {this.state.nFlips} flips: {this.state.nHeads} heads, {this.state.nTails} tails </p>
            </div>
        );
    }
}

export default CoinFlip;
