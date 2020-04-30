import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Setup from './components/quizsetup';
import { spy } from 'sinon';

describe("Quiz setup", () => {
    let wrapper;
    let historyMock;
    
    beforeEach(() => {
        historyMock = { push: jest.fn() };
        wrapper = shallow(<Setup history={historyMock}/>);
    });
    it('should render one <form>', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
    
    it('should render four <label>',()=>{
        expect(wrapper.find('label')).toHaveLength(4);
    });
    it('should render one <div> element',()=>{
        expect(wrapper.find('div')).toHaveLength(1);
    })

    describe("handleChange", () => {
        it("should call setState on title", () => {
            const mockEvent = {
                target: {
                    name: "numOfPlayers",
                    value: "3"
                }
            };
            const expected = {
                questionAmount: "5",
                category: "9",
                difficulty: "easy",
                numOfPlayers: "3",
            };
            wrapper.instance().handleChange(mockEvent);
            expect(wrapper.state()).toEqual(expected);
        });
    });

    it("should call preventDefault", () => {
        const mockPreventDefault = jest.fn();
        const mockEvent = {
            preventDefault: mockPreventDefault
        };
        wrapper.instance().handleSubmit(mockEvent);
        expect(mockPreventDefault).toHaveBeenCalled();
    });

    it("should return if submit works", () => {
        const mockPreventDefault = jest.fn();
        const mockEvent = {
            preventDefault: mockPreventDefault
        };
        
        const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
        wrapper.instance().forceUpdate();
        
        wrapper.instance().handleSubmit(mockEvent);
        expect(spy).toReturn();
    });





    //     wrapper.find('form').simulate('submit', { preventDefault() {}});
    //     expect(mockSubmit).toHaveBeenCalledTimes(1)
    // })
    

    // it("should call submit with the correct params", () => {
    //     wrapper.setState({
    //         questionAmount: "10",
    //         category: "9",
    //         difficulty: "medium",
    //         numOfPlayers: "0"
    //     });
    //     const expected = {
    //         questionAmount: "10",
    //         category: "9",
    //         difficulty: "medium",
    //         numOfPlayers: "0"
    //     };
    //     const mockPreventDefault = jest.fn();
    //     const mockEvent = {
    //         preventDefault: mockPreventDefault
    //     };
    //     wrapper.instance().handleSubmit(mockEvent);
    //     expect(mockSubmit).toHaveBeenCalledWith(expected);
     });

