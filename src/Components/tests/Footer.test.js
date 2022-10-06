import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";

import Footer from "../Footer"

afterEach(() => {
  cleanup()
})

test("should render footer component", () => {
    render(<Footer/>)
    const headerComponent = screen.getByTestId('footer');
    expect(headerComponent).toBeInTheDocument();
})

test("Footer includes correct html innerText", () => {
    render(<Footer/>)
    const headerComponent = screen.getByTestId('footer');
    expect(headerComponent).toHaveTextContent(". All Rights Reserved.");
})

test("renders Footer snapshot", () => {
    const newFooter = renderer.create(<Footer/>).toJSON();
    expect(newFooter).toMatchSnapshot();
})