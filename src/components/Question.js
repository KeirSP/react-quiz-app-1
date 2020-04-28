import React, { Component } from 'react';
import axios from "axios"

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            questions: [],
            userAnswers: [],
            currentPlayer: 0
         }
         /* this.handleSubmit = this.handleSubmit.bind(this); */
         this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event,index){
        event.preventDefault();
        const value = event.target.value;
        console.log(index,value)
        this.setState({userAnswers:{index:value}})
        console.log(this.state.userAnswers)
    }

/*     handleSubmit(event) {
        event.preventDefault();
        const numOfPlayers = this.props.location.state.numOfPlayers;
        let currentPlayer =  this.state.currentPlayer;
        if(currentPlayer<(numOfPlayers - 1)) {
            currentPlayer ++;
            this.state.userAnswers[currentPlayer].push();
            //rerender form
        } else {
            this.props.history.push({
                pathname: '/results'

            })
        }
    } */

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
          

    randomiseQuestions(apiData){
        console.log(apiData)
        const newQuestionArray = []
        const tempArray = []
        apiData.forEach(element => {
            tempArray.push(element.correct_answer, ...element.incorrect_answers)
            newQuestionArray.push(tempArray.splice(0,4))
        })
        for(let i = 0; i < apiData.length; i++) {
            console.log(newQuestionArray[i])
        this.randomSort(newQuestionArray[i])
        // newQuestionArray.forEach(element => this.randomSort(element))
        console.log(newQuestionArray[i])
        }
        
        this.setState({questions:newQuestionArray}) 
    }

    componentDidMount() {
        this.apiCall().then(response => {
            this.randomiseQuestions(response)
        })
        const numOfPlayers = this.props.location.state.numOfPlayers;
        console.log(numOfPlayers)
        for (let i=0; i<numOfPlayers; i++){
            this.setState({userAnswers:[...this.state.userAnswers, {}]})
        }
        console.log(this.state.userAnswers);
    }


    render() { 
        const questionItems = this.state.questions;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                {questionItems.length > 0 ?

                questionItems.map((item,index) => (
                    <div key={index}>
                    <h5>{questionItems.question}</h5>
                    <br />
                    <label>{item[0]}</label>
                    <input type="radio" name="question" value={item[0]} onChange={(event) => this.handleChange(event,index)} />
                    <label>{item[1]}</label>
                    <input type="radio" name="question" value={item[1]} onChange={(event) => this.handleChange(event,index)} />
                    <label>{item[2]}</label>
                    <input type="radio" name="question" value={item[2]} onChange={(event) => this.handleChange(event,index)} />
                    <label>{item[3]}</label>
                    <input type="radio" name="question" value={item[3]} onChange={(event) => this.handleChange(event,index)} />
                    </div>
                ))

                :
                <h3>Loading</h3>}                
                </form>
            </div>
           );
    }
}





export default Question;



                    