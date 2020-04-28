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
        /* if (this.state.questions.length > 1){this.randomiseQuestions()} */
    }


    render() { 
        const questionItems = this.state.questions;
        console.log(questionItems)
        return (
            <div>
                {questionItems.length > 0 ?
                
                questionItems.map(item => (
                    <div>
                    <h5>{questionItems.question}</h5>
                    <br />
                    <label>{item[0]}</label>
                    <input type="radio" name="question" id={item.index} value={item[0]} />
                    <label>{item[1]}</label>
                    <input type="radio" name="question" id={item.index} value={item[1]} />
                    <label>{item[2]}</label>
                    <input type="radio" name="question" id={item.index} value={item[2]} />
                    <label>{item[3]}</label>
                    <input type="radio" name="question" id={item.index} value={item[3]} />
                    </div>
                ))
                
                :
                <h3>Loading</h3>}
            </div>
         );
    }
}





export default Question;



                    