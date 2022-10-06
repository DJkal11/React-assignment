import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";

import Header from "../Header"

afterEach(() => {
  cleanup()
})

test("should render header component", () => {
    render(<Header/>)
    const headerComponent = screen.getByTestId('header');
    expect(headerComponent).toBeInTheDocument();
})

test("Header includes correct html innerText", () => {
    render(<Header/>)
    const headerComponent = screen.getByTestId('header');
    expect(headerComponent).toHaveTextContent("Dashboard");
})


test("renders Header snapshot", () => {
    const newHeader = renderer.create(<Header/>).toJSON();
    expect(newHeader).toMatchSnapshot();
})