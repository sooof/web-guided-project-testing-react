import React from 'react';
import { screen, render} from '@testing-library/react';
import MissionsList from './MissionsList';

test("renders without errors", ()=> {
    render(<MissionsList missions={[]}/>);
});

test("renders 3 missions after rendering no missions", ()=> {
    //Arrange 1: render component with no missions
    const { rerender } = render(<MissionsList missions={[]}/>);

    //Act 1: Find all missions
    let missions = screen.queryAllByTestId('mission');

    //Asset 1: Check that no missions have been rendered.
    expect(missions).toHaveLength(0);

    //Arrange 2: render component with 3 missions

    //Act 3: Find all missions
    //Asset 3: Check that 3 missions have been rendered.
});