import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Results from '../components/Results';


describe("Results Page", () => {

    //beforeEach(() => {
        const mockEvent = {
            state: {
                numOfPlayers: '2',
                userAnswers: [[],[]],
                correctAnswers: '2',
                questions: '5'
            }}
        const wrapper = shallow(<Results location={mockEvent}/>)
    
    it('renders without crashing', ()=>{
        expect(wrapper.find('div')).toHaveLength(3);
     });

    it('should render the leaderboard', () => {
        expect(wrapper.find('.leaderboard').exists()).toBe(true);
    })

    it('creates the correct number of arrays: ', () =>{
        const spy = jest.spyOn(Results.prototype, 'createScoreArrays');
        wrapper.instance().createScoreArrays();
        expect(this.state.playerScore).toEqual(2);
    });

    it('calls componentDidMount', () => {
        const spy = jest.spyOn(Results.prototype, 'componentDidMount');
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();;
       })
})
