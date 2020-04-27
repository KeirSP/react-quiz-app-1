import React, { Component } from 'react';

class Setup extends Component {
    constructor(props){
        super(props);
        this.state = { 
            questionAmount: "5",
            category: "9",
            difficulty: "easy",
            numOfPlayers: "1"
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

     handleChange(event) {
        event.preventDefault()
        const value = event.target.value;
        console.log(value)
        this.setState({
            ...this.state,
            [event.target.name]: value
         });
        console.log(this.state)
      }

      handleSubmit(event) {
          event.preventDefault()
          this.props.history.push({
            pathname: '/quiz',
            state: { 
                questionAmount: this.state.questionAmount,
                category: this.state.category,
                difficulty: this.state.difficulty,
                numOfPlayers: this.state.numOfPlayers
            }
          })
        };

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="difficultyDropdown">Difficulty</label>
                    <select
                    name = "difficulty"
                    className="difficultyDropDown"
                    value = {this.state.difficulty}
                    onChange={this.handleChange}
                    >
                        <option value="easy" defaultValue="selected">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                <label htmlFor="categoryDropdown">Category</label>
                    <select
                    name = "category"
                    className="categoryDropDown"
                    value = {this.state.category}
                    onChange={this.handleChange}
                    >
                        <option value="9" defaultValue="selected">General Knowledge</option>
                        <option value="21">Sports</option>
                        <option value="17">Science & Nature</option>
                        <option value="23">History</option>
                        <option value="28">Vehicles</option>
                    </select>
                <label htmlFor="numberOfQuestionsDropdown">Number of questions</label>
                    <select
                    name = "questionAmount"
                    className="numberOfQuestionsDropdown"
                    value = {this.state.questionAmount}
                    onChange={this.handleChange}
                    >
                        <option value="5" defaultValue="selected">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                <label htmlFor="numberOfPlayersDropdown">Number of players</label>
                    <select
                    name = "numOfPlayers"
                    className="numberOfPlayersDropdown"
                    value = {this.state.questionAmount}
                    onChange={this.handleChange}
                    >
                        <option value="1" defaultValue="selected">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                <input type="submit" value="Start Quiz" />
            </form>
         );
    }
}


export default Setup;