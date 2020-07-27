import React from "react";
import { Profile } from "./Profile";
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";

describe("Profile", () => {
    it("renders correctly", () => {
      const { container } = render(<Profile />);
      expect(container.innerHTML).toMatch("Профиль")
    });
  });

  describe('Testing the Profile Component', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Profile unauthenticate={()=>{}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});