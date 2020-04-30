import React, { Component } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Question.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            questions: [],
            answers: [],
            userAnswers: [],
            //numOfPlayers: this.props.location.state.numOfPlayers,
            currentPlayer: 0,
            correctAnswers: []
         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleClick = this.handleClick.bind(this)
    }

    // Puts user answers into correct place in userAnswers state
    handleClick(event,index){
        const currentPlayer = this.state.currentPlayer;
        const value = event.target.value;
        let tempArray = {...this.state.userAnswers}
        //console.log(currentPlayer)
        tempArray[currentPlayer][index] = value
        this.setState({userAnswers:tempArray})
    }

    // Handles whether to go to results page or continue to next player
    handleSubmit(event) {
        event.preventDefault();
        const numOfPlayers = this.state.numOfPlayers
        //console.log(numOfPlayers)
        let currentPlayer =  this.state.currentPlayer;
        event.target.reset() //rerender form
        if(currentPlayer < (numOfPlayers - 1)) {
            this.setState({currentPlayer: this.state.currentPlayer + 1})
        }
        else {
            this.props.history.push({
                pathname: '/results',
                state: {
                    correctAnswers: this.state.correctAnswers,
                    userAnswers: this.state.userAnswers,
                    questions: this.state.questions,
                    numOfPlayers: this.state.numOfPlayers
                }

            })
        }
    }

    async apiCall(){
        //console.log(this.props)
        const questionAmount = this.props.location.state.questionAmount;
        const category = this.props.location.state.category;
        const difficulty = this.props.location.state.difficulty;
        try{
            const apiResponse = await axios(`https://opentdb.com/api.php?amount=${questionAmount}&category=${category}&difficulty=${difficulty}&type=multiple`)
            return apiResponse.data.results
        }
        catch(err){
            this.setState({errorMessage:err})
        }
        
    }
    
    randomSort(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
        }
          

    randomiseAnswers(apiData){
        const newQuestionArray = []
        const newAnswerArray = []
        const tempArray = []
        const correctAnswerArray = []
        apiData.forEach(element => {
            newQuestionArray.push(element.question)
        })
        
        
        apiData.forEach(element => {
            correctAnswerArray.push(element.correct_answer)
            tempArray.push(element.correct_answer, ...element.incorrect_answers)
            newAnswerArray.push(tempArray.splice(0,4))
        })
        for(let i = 0; i < apiData.length; i++) {
            this.randomSort(newAnswerArray[i])
        }
        
        this.setState({correctAnswers: correctAnswerArray})
        this.setState({questions:newQuestionArray})
        this.setState({answers:newAnswerArray})        
    }

    componentDidMount() {
        this.apiCall().then(response => {
            this.randomiseAnswers(response)
        })
        // const numOfPlayers = this.props.location.state.numOfPlayers;
        // let tempArray = []
        // for (let i=0; i<numOfPlayers; i++){
        //     tempArray.push([])
        // }
        // this.setState({
        //     userAnswers: [...this.state.userAnswers,...tempArray]
        // })
    }


    render() { 
        const questionItems = this.state.questions;
        const answerItems = this.state.answers;
        //console.log(this.state.userAnswers)
        return (
            <div className="questionSpace" >
                <div id="playerTitle">
                    <h2>{`Player ${this.state.currentPlayer + 1}`}</h2>
                </div>
                <Form id="quizForm" onSubmit={this.handleSubmit}>
                {questionItems.length > 0 ?

                answerItems.map((item,index) => (
                    <div id="quizQuestions" key={index}>
                    <h5>{questionItems[index]}</h5>
                    <input required type="radio" name={index} value={item[0]} onClick={(event) => this.handleClick(event,index)} />
                    <label>{item[0]}</label>
                    <input type="radio" name={index} value={item[1]} onClick={(event) => this.handleClick(event,index)} />
                    <label>{item[1]}</label>
                    <input type="radio" name={index} value={item[2]} onClick={(event) => this.handleClick(event,index)} />
                    <label>{item[2]}</label>
                    <input type="radio" name={index} value={item[3]} onClick={(event) => this.handleClick(event,index)} />
                    <label>{item[3]}</label>
                    </div>
                ))

                :
                <h3>Loading...</h3>} 
                <div className="submitAnswers">
                
                <Button  variant="light" type="submit" value="Submit Answer">Submit Answers</Button>
                </div>
                </Form>
            </div>
           );
    }
}




export default Question;



                    