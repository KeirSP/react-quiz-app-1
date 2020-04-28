import React, { Component } from 'react';
import axios from "axios"

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            questions: [],
            answers: [],
            userAnswers: [],
            numOfPlayers: this.props.location.state.numOfPlayers,
            currentPlayer: 0
         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event,index){
        const currentPlayer = this.state.currentPlayer;
        const value = event.target.value;
        let tempArray = {...this.state.userAnswers}
        console.log(currentPlayer)
        tempArray[currentPlayer][index] = value
        this.setState({userAnswers:tempArray})
    }

    handleSubmit(event) {
        event.preventDefault();
        const numOfPlayers = this.state.numOfPlayers
        console.log(numOfPlayers)
        let currentPlayer =  this.state.currentPlayer;
        event.target.reset()
        if(currentPlayer < numOfPlayers) {
            this.setState({currentPlayer: this.state.currentPlayer + 1})
            //rerender form
        } else {
            this.props.history.push({
                pathname: '/results',
                state: {
                    answers: this.state.answers,
                    userAnswers: this.state.userAnswers
                }

            })
        }
    }

    async apiCall(){
        console.log(this.props)
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
        apiData.forEach(element => {
            newQuestionArray.push(element.question)
        })
        
        
        apiData.forEach(element => {
            tempArray.push(element.correct_answer, ...element.incorrect_answers)
            newAnswerArray.push(tempArray.splice(0,4))
        })
        for(let i = 0; i < apiData.length; i++) {
            this.randomSort(newAnswerArray[i])
        }
        
        this.setState({questions:newQuestionArray})
        this.setState({answers:newAnswerArray})
        
    }

    componentDidMount() {
        this.apiCall().then(response => {
            this.randomiseAnswers(response)
        })
        const numOfPlayers = this.props.location.state.numOfPlayers;
        const numOfQuestions = this.props.location.state.questionAmount;
        let tempArray = []
        console.log(numOfPlayers, numOfQuestions)
        for (let i=0; i<numOfPlayers; i++){
            tempArray.push([])
            /* for (let j=0; j < numOfQuestions; j++){
                tempArray[i].push([])
            } */
        }
        this.setState({
            userAnswers: [...this.state.userAnswers,...tempArray]
        })
    }


    render() { 
        const questionItems = this.state.questions;
        const answerItems = this.state.answers;
        // const numOfPlayers = this.props.location.state.numOfPlayers;
        console.log(this.state.userAnswers)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                {questionItems.length > 0 ?

                answerItems.map((item,index) => (
                    <div id={index} key={index}>
                    <h5>{questionItems[index]}</h5>
                    <br />
                    <label>{item[0]}</label>
                    <input type="radio" name={index} value={item[0]} onClick={(event) => this.handleChange(event,index)} />
                    <label>{item[1]}</label>
                    <input type="radio" name={index} value={item[1]} onClick={(event) => this.handleChange(event,index)} />
                    <label>{item[2]}</label>
                    <input type="radio" name={index} value={item[2]} onClick={(event) => this.handleChange(event,index)} />
                    <label>{item[3]}</label>
                    <input type="radio" name={index} value={item[3]} onClick={(event) => this.handleChange(event,index)} />
                    </div>
                ))

                :
                <h3>Loading</h3>}    
                <br />  
                <button type="submit" value="submit">Submit Answers</button>                    
                </form>
            </div>
           );
    }
}





export default Question;



                    