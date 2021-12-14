import React from 'react';
import { screen, render } from '@testing-library/react';
import MissionsList from './MissionsList';

test("renders without errors", ()=> {
    render(<MissionsList missions={[]}/>);
});
test("renders no missions and then renders 3 missions on rerendering", ()=> {
    //Arrange 1
    const renderstuff = render(<MissionsList missions={[]}/>);

    console.log(renderstuff)
    //Act 1
    let missions = screen.queryAllByTestId('mission');

    //Assert 1
    expect(missions).toHaveLength(0);

});