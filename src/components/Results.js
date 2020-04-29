import React, { Component } from 'react'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfPlayers: this.props.location.state.numOfPlayers,
        }
    }
    render() {
        const numOfPlayers = this.state.numOfPlayers;

        return (
            <div className="leaderboard">
                <div>
                </div>
            </div>
        )
    }
}

export default Results
