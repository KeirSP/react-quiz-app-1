import React, { Component } from 'react';
import axios from "axios"

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            questions: [],
            userOneAnswers: [],
            userTwoAnswers: []
         }
    }

    async componentDidMount() {
        console.log(this.props)
        const questionAmount = this.props.location.state.questionAmount;
        const category = this.props.location.state.category;
        const difficulty = this.props.location.state.difficulty;
        try{
            const apiResponse = await axios(`https://opentdb.com/api.php?amount=${questionAmount}&category=${category}&difficulty=${difficulty}&type=multiple`)
            this.setState({questions:apiResponse.data.results})
            console.log(this.state.questions)
        }
        catch(err){
            this.setState({errorMessage:err})
        }
    }

    render() { 
        const questionItems = this.state.questions;
        console.log(questionItems)
        return (
            <div>
                {questionItems.length > 0 ?
                
                questionItems.map(item => (
                    <div>
                    <h5>{item.question}</h5>
                    <br />
                    <label>{item.correct_answer}</label>
                    <input type="radio" name="question" id={item.index} value={item.correct_answer} />
                    <label>{item.incorrect_answers[0]}</label>
                    <input type="radio" name="question" id={item.index} value={item.incorrect_answers[0]} />
                    <label>{item.incorrect_answers[1]}</label>
                    <input type="radio" name="question" id={item.index} value={item.incorrect_answers[1]} />
                    <label>{item.incorrect_answers[2]}</label>
                    <input type="radio" name="question" id={item.index} value={item.incorrect_answers[2]} />
                    </div> 
                ))
                
                :
                <h3>Loading</h3>}
            </div>
         );
    }
}





export default Question;