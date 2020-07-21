import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'

jest.mock("./Login", () => ({ Login: () => <div>Login content</div> }));
jest.mock("./Registration", () => ({ Registration: () => <div>Registration content</div> }));
jest.mock("./Profile", () => ({ Profile: () => <div>Profile content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const mockStore={
      getState:()=>({auth:{isLoggedIn: true}}),
      subscribe:()=>{},
      dispatch:()=> {}
    }
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
        </Router>
    );
    expect(container.innerHTML).toMatch("Login content");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const mockStore={
        getState:()=>({auth:{isLoggedIn: true}}),
        subscribe:()=>{},
        dispatch:()=> {}
      };

      const history = createMemoryHistory();

      const { getByText, container } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      );
      expect(container.innerHTML).toMatch("Login content");
      fireEvent.click(getByText('Registration'));
      expect(container.innerHTML).toMatch("Registration content");
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch("Profile content");
    });
  });
});