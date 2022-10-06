import { render, screen, cleanup } from "@testing-library/react";
import React from "react";

import Dashboard from "../Dashboard";
// import Card from "../Card"

afterEach(() => {
  cleanup()
})

test('should render dashboard', () => {
    render(<Dashboard/>);  
})

test("Header includes correct html innerText", () => {
  render(<Dashboard/>)
  const headerComponent = screen.getByTestId('dashboard-0');
  expect(headerComponent).toHaveTextContent("Courses");
})

describe('Dashboard Component', () => {
    render(<Dashboard />);
    
    // it('Contains Card component', async () => {
    //   render(<Dashboard />);

    //   const component = screen.getAllByRole(Card)
    //   expect(component).toBeInTheDocument();
      
    // })
    
    it('Dashboard includes html elements', async () => {
      render(<Dashboard />);
      const divElement = screen.getByTestId('dashboard-0');
      expect(divElement).toBeInTheDocument();
    });
   
  });