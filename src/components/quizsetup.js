import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './quizsetup.css';


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
            <div>
                <div className="opening" >
                <Container fluid>
                    <Row>
                        <Col sm={9} >
                            <h1 className="title">Welcome to Quiz City!</h1>
                            <p className="quizinfo">Do you love quizzes? </p>
                            <p className="quizinfo">Are you eager for challenging questions and a fun user experience? </p>
                            <p className="quizinfo">Do you want to beat your friends in multiplayer mode? </p>
                            <p className="quizinfo">Then you've come to the right place; simply complete the configuration form below 
                                to start your quiz journey!</p>
                            <p className="quizinfo">Who will claim the throne in Quiz City? </p>
                        </Col>
                        <Col className="qmarkSpace">
                            <img alt="question mark logo" className="qmarkLogo"
                            src="https://www.pinclipart.com/picdir/big/391-3915175_convention-networking-sponsorship-questions-icon-question-mark-square.png"
                            />
                        </Col>
                    </Row>
                </Container>
                </div>
                <Form id="form" onSubmit={this.handleSubmit}>
                    <Form.Group id="form-difficulty">
                    <Form.Label htmlFor="difficultyDropdown">Difficulty</Form.Label>
                        <Form.Control as="select"
                        name = "difficulty"
                        className="difficultyDropDown"
                        value = {this.state.difficulty}
                        onChange={this.handleChange}
                        >
                            <option value="easy" defaultValue="selected">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group id="form-category">
                    <Form.Label htmlFor="categoryDropdown">Category</Form.Label>
                        <Form.Control as="select"
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
                        </Form.Control>
                    </Form.Group>
                    <Form.Group id="form-questions">
                    <Form.Label htmlFor="numberOfQuestionsDropdown">Number of questions</Form.Label>
                        <Form.Control as="select"
                        name = "questionAmount"
                        className="numberOfQuestionsDropdown"
                        value = {this.state.questionAmount}
                        onChange={this.handleChange}
                        >
                            <option value="5" defaultValue="selected">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group id="form-players">
                    <Form.Label htmlFor="numberOfPlayersDropdown">Number of players</Form.Label>
                        <Form.Control as="select"
                        name = "numOfPlayers"
                        className="numberOfPlayersDropdown"
                        value = {this.state.numOfPlayers}
                        onChange={this.handleChange}
                        >
                            <option value="1" defaultValue="selected">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="light" type="submit" value="Start Quiz">Start Quiz!</Button>
                </Form>
            </div>
         );
    }
}


export default Setup;