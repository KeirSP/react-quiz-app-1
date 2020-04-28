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
            currentPlayer: 0
         }
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const numOfPlayers = this.props.location.state.numOfPlayers;
        const currentPlayer =  this.state.currentPlayer;
        if(currentPlayer<(numOfPlayers - 1)) {
            event.preventDefault();
            currentPlayer ++;
            this.state.userAnswers[currentPlayer].push();
            //rerender form
        } else {
            event.preventDefault();
            this.props.history.push({
                pathname: '/results'

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
            /* this.setState({questions:apiResponse.data.results})
            console.log(this.state.questions) */
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
        // console.log(apiData[0].question)
       
        apiData.forEach(element => {
            tempArray.push(element.correct_answer, ...element.incorrect_answers)
            newAnswerArray.push(tempArray.splice(0,4))
        })
        for(let i = 0; i < apiData.length; i++) {
            // console.log(newAnswerArray[i])
            this.randomSort(newAnswerArray[i])
            // console.log(newAnswerArray[i])
        }
        
        this.setState({questions:newQuestionArray})
        this.setState({answers:newAnswerArray})
        
    }

    componentDidMount() {
        this.apiCall().then(response => {
            this.randomiseAnswers(response)
        })
        /* if (this.state.questions.length > 1){this.randomiseAnswers()} */
        const numOfPlayers = this.props.location.state.numOfPlayers;
        for (let i=0; i<numOfPlayers; i++){
            this.state.userAnswers.push([])
        }
        console.log(this.state.userAnswers);
    }


    render() { 
        const questionItems = this.state.questions;
        const answerItems = this.state.answers;
        const numOfPlayers = this.props.location.state.numOfPlayers;
        console.log(numOfPlayers);
        console.log(questionItems);
        console.log(answerItems)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                {questionItems.length > 0 ?

                answerItems.map((item, index) => (
                    <div id={index} key={index}>
                    <h5>{questionItems[index]}</h5>
                    <br />
                    <label>{item[0]}</label>
                    <input type="radio" name={index} value={item[0]} />
                    <label>{item[1]}</label>
                    <input type="radio" name={index} value={item[1]} />
                    <label>{item[2]}</label>
                    <input type="radio" name={index} value={item[2]} />
                    <label>{item[3]}</label>
                    <input type="radio" name={index} value={item[3]} />
                    </div>
                ))
                
                :
                <h3>Loading</h3>} 
                <br />  
                <button value="submit">Submit Answers</button>        
                </form>
            </div>
           );
    }
}





export default Question;



                    