import React, { Component } from 'react'

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
        this.combinedDataArray()

    }

    render() {
        const { playerScore } = this.state
        const {combinedData} = this.state
        console.log(combinedData)
        return (
            <React.Fragment>
            <div className="leaderboard">
                {playerScore.map((score, index) => (
                    <h3 key={index}>{`Player${index+1} Score: ${score}`}</h3>
                ))
                }
            </div>
            <div className="resultsDetails">
            <table className="resultsTable">
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
            </table>
            </div>
            </React.Fragment>
        )
    }
}

export default Results
