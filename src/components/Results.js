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
        console.log(numOfPlayers)
        const tempArray = [];
        for (let i=0; i< numOfPlayers; i++){
            tempArray.push(0)
        }
        this.setState({
            playerScore: [...this.state.playerScore,...tempArray]}, this.compareAnswers
        )
        console.log(tempArray)
    };

    compareAnswers() {
        const correctAnswers = this.state.correctAnswers;
        const userAnswers = this.state.userAnswers;

        const numOfPlayers = this.state.numOfPlayers;
        const tempArray = []
        for(let i = 0; i < numOfPlayers; i++) {
            tempArray.push(0)
            for(let j = 0; j < userAnswers[i].length; j++) {
                if (userAnswers[i][j] === correctAnswers[j]) {
                    tempArray[i] += 1
                    this.setState({playerScore:tempArray})
                }
            }
        }

    }

    componentDidMount() {
        console.log(this.state.correctAnswers);
        console.log(this.state.userAnswers);
        this.createScoreArrays();

    }

    render() {
        const { playerScore } = this.state
        console.log(playerScore)
        return (
            <div className="leaderboard">
                {playerScore.map((score, index) => (
                    <h3 key={index}>{`Player${index+1} Score: ${score}`}</h3>
                ))

                }
            </div>
        )
    }
}

export default Results
