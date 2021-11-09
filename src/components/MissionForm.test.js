import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MissionForm from "./MissionForm";

test("render without errors", ()=>{
    render(<MissionForm/>);
    
})