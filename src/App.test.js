import React from 'react';
import {screen, render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "./App";

test("renders without error", ()=> {
    render(<App/>);
});

test("renders all missions when button is clicked", async ()=> {
    //Arrange: Renders App
    render(<App/>);

    //Act: Find and push our button within MissionForm
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert: Verify that mission items are on the screen
    const missions = screen.findAllByTestId('mission');
    console.log(missions);
});