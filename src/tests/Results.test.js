import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Results from '../components/Results';


describe("Results Page", () => {
    beforeEach(() => {
        const mockEvent = {
            state: {
                numOfPlayers: '2',
                userAnswers: '5',
                correctAnswers: '2',
                questions: '5'
            }
        }
        const wrapper = shallow(<Results location={mockEvent}/>);
        })
    
    // it('renders without crashing', ()=>{
        
    //     const div = document.createElement('div');
    //     ReactDOM.render(<Results />,div);
    //     ReactDOM.unmountComponentAtNode(div);
    // });

    it('should render the leaderboard', () => {
        wrapper.setState({...mockState});
        // expect(wrapper.find('.leaderboard').exists()).toBe(true);
        expect(wrapper).to.have.length(1);
    })

    // it('calls componentDidMount', () => {
    //     jest.spyOn(Results.prototype, 'componentDidMount')
    //     const wrapper = shallow(<Results />)
    //     expect(Results.prototype.componentDidMount.mock.calls.length).toBe(1)
    //   })
})

