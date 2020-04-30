import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Question from '../components/Question';
import { spy } from 'sinon';


describe('Login Test Suite', () => {
    const mockEvent={
        state:{
            numOfPlayers:1
        }
    }
    it('should render the form', () => {
        const wrapper = shallow(<Question location={mockEvent}/>);
        expect(wrapper.find('#quizForm').exists()).toBe(true);
        expect(wrapper.find('div').exists()).toBe(true);
    })
    it('calls componentDidMount', () => {
        jest.spyOn(Question.prototype, 'componentDidMount')
        const wrapper = shallow(<Question location={mockEvent}/>)
        expect(Question.prototype.componentDidMount.mock.calls.length).toBe(1)
      })
})

describe('Basic Functions for Questions module: ', ()=>{
    const mockEvent={
        state:{
            numOfPlayers:1
        }
    }
    const wrapper=shallow(<Question location={mockEvent}/>);
    
    it('randomSort function is tested with letters: ', () =>{
        
        const array=["a","b"];
      

        const result=wrapper.instance().randomSort(array);
        expect(result).toEqual(expect.arrayContaining(["a","b"]));
        //expect(result).toEqual(r2);
    });

    it('randomiseAnswers function is tested: ', ()=>{
        
        const apiData=[
            {
            question:"How was your day?",
            correct_answer:"Good",
            incorrect_answers:["Bad","Very Bad","Very Very Bad"]
            },
            {
            question:"How was your day11?",
            correct_answer:"Good11",
            incorrect_answers:["Bad11","Very Bad11","Very Very Bad11"]
            }
        ]
        const expected = 
            {
            question: ["How was your day?", "How was your day11?"],
            correct_answer:["Good", "Good11"],
            answers: [["Good", "Bad","Very Bad","Very Very Bad"],["Good11","Bad11","Very Bad11","Very Very Bad11"]]
            
            }
        // testing expectation of expected.answers will not work as it is randomised - this is tested above
        wrapper.instance().randomiseAnswers(apiData);
        expect(wrapper.state("questions")).toEqual(expected.question)
        expect(wrapper.state("correctAnswers")).toEqual(expected.correct_answer)
    });
   
        // it('fetches successfully data from an API', async () => {
    //       const data = {};
       
    //       axios.get.apiCall(() => Promise.resolve(data));
       
    //       await expect(fetchData('react')).resolves.toEqual(data);
    
    // })
});

         // describe("Quiz questions", () => {
//     let wrapper;
//     let historyMock;
    
//     beforeEach(() => {
//         historyMock = { push: jest.fn() };
//         wrapper = shallow(<Question />);
//     });

//     it("async test", async function () {
//        const response=new Question();
//        console.warn(await response.apiCall());
//        expect("hello!").toEqual("hello!")
//     })
    


    // apiCall(){
    //     console.log(this.props)
    //     const questionAmount = 5;
    //     const category = 21;
    //     const difficulty = 'easy';
       
    //         return fetch(`https://opentdb.com/api.php?amount=${questionAmount}&category=${category}&difficulty=${difficulty}&type=multiple`).then((response)=>{
    //             return response.json();
    //         })
           
       
       
    // }
