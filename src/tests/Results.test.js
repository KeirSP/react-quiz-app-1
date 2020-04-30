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

    // it('calls componentDidMount', () => {
    //     jest.spyOn(Results.prototype, 'componentDidMount')
    //     const wrapper = shallow(<Results />)
    //     expect(Results.prototype.componentDidMount.mock.calls.length).toBe(1)
    //   })
})
