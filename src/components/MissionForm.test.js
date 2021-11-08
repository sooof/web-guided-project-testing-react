import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MissionForm from './MissionForm';

test("renders without errors", ()=> {
    render(<MissionForm/>);
});

test('renders loading message if isFetchingData is true', ()=> {
    //Arrange: Renders our component with isFetchingData === true
    render(<MissionForm isFetchingData={true}/>);

    //Act: Find our loading message
    const loadingMessage = screen.getByText(/we are fetching data/i);

    //Assert: Verify that loading message exists
});

test('renders button if isFetchingData is false', ()=> {

})

test('executes getData if button is clicked', ()=> {

});
