import React, { Component } from 'react'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfPlayers: this.props.location.state.numOfPlayers,
            userAnswers: this.props.location.state.userAnswers,
            correctAnswers: this.props.location.state.correctAnswers,
            playerScore: []
        }
    }

    createScoreArrays() {
        const numOfPlayers = this.state.numOfPlayers;
        const tempArray = [];
        for (let i=0; i<numOfPlayers; i++){
            tempArray.push(0)
        }
        this.setState({
            playerScore: [...this.state.playerScore,...tempArray]
        })
    };

    compareAnswers() {
        this.createScoreArrays();
        const correctAnswers = this.state.correctAnswers;
        const userAnswers = this.state.userAnswers;
        const playerScore = this.state.playerScore;
        const numOfPlayers = this.state.numOfPlayers;
        console.log(userAnswers.length);
        console.log(userAnswers[0].length)
        for(let i = 0; i < numOfPlayers; i++) {
            console.log(i);
            for(let j = 0; j < userAnswers[i].length; j++) {
                console.log(userAnswers[i]);
                if (userAnswers[i][j] === correctAnswers[j]) {
                    console.log(playerScore[i]);
                    playerScore[i]++;
                    console.log(playerScore);
                }
            }
        }

    }

    componentDidMount() {
        console.log(this.state.correctAnswers);
        console.log(this.state.userAnswers);
        this.compareAnswers();

    }

    render() {
        const numOfPlayers = this.state.numOfPlayers;

        return (
            <div className="leaderboard">
                <div>
                    <h3>Placeholder</h3>
                </div>
            </div>
        )
    }
}

export default Results
