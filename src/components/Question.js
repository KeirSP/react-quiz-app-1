import React, { Component } from 'react';
import axios from "axios"

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: ""
            
         }
    }

    async componentDidMount() {
        console.log(this.props)
        const questionAmount = this.props.location.state.questionAmount;
        const category = this.props.location.state.category;
        const difficulty = this.props.location.state.difficulty;
        try{
            const apiResponse = await axios(`https://opentdb.com/api.php?amount=${questionAmount}&category=${category}&difficulty=${difficulty}`)
            console.log(apiResponse)
        }
        catch(err){
            this.setState({errorMessage:err})
        }
    }

    render() { 
        return ( 
            <div>
                <h2>Hi</h2>
            </div>
         );
    }
}
 
export default Question;