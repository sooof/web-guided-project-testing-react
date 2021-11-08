import React from 'react';
import {screen, render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "./App";

test("renders without error", ()=> {
    render(<App/>);
});

test("renders all missions when button is clicked", ()=> {
    //Arrange: Renders App
    //Act: Find and push our button within MissionForm
    //Assert: Verify that mission items are on the screen
});