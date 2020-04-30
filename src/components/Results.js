import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import './Results.css'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfPlayers: this.props.location.state.numOfPlayers,
            userAnswers: this.props.location.state.userAnswers,
            correctAnswers: this.props.location.state.correctAnswers,
            questions: this.props.location.state.questions,
            combinedData: [],
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

    combinedDataArray(){
        const {questions} = this.state
        console.log(questions.length)
        const {correctAnswers} = this.state
        const {userAnswers} = this.state
        const {numOfPlayers} = this.state
        const combinedData = []
        for (let i=0;i<questions.length;i++){
            combinedData.push([])
            combinedData[i].push(questions[i],correctAnswers[i])
            for (let j=0; j<(numOfPlayers);j++){
                combinedData[i].push(userAnswers[j][i])
                }
        }
        this.setState({combinedData:combinedData})
    }

    renderTableData(){
        const {combinedData} = this.state
        return(
        combinedData.map((quiz) => (
            <tr>
                {quiz.map(element => (
                    <td>
                        {element}
                    </td>
                ))}
            </tr>
            
        ))
        )
    }



    componentDidMount() {
        console.log(this.state.correctAnswers);
        console.log(this.state.userAnswers);
        this.createScoreArrays();
        this.combinedDataArray();
        

    }

    render() {
        const { playerScore } = this.state
        const { combinedData } = this.state
        console.log(combinedData)
        console.log(playerScore)

        return (
            <React.Fragment>
            
                <div className="leaderboard">
                    <h2 className="resultsHeading">Quiz City Leaderboard</h2>
                    <Table bordered className="leaderboardTable">
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Scores</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            playerScore.map((score, index) => (
                            <tr>
                                <td key={index}>{`Player ${index+1}`}</td>
                                <td>{score}</td>
                            </tr>
                            ))
                            }
                        </tbody>
                    
                    </Table>
                </div>
            
            
            <div className="resultsDetails">
            <h2 className="resultsHeading">Question Results and Answers</h2>
            <Table striped bordered hover className="resultsTable">
                <thead>
                    <tr>
                        <th>Questions</th>
                        <th>Answer</th> 
                        {playerScore.map((score,index) => (<th key={index}>{`Player ${index+1}`}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </Table>
            <div>

            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Results
