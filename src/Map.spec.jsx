import React from "react";
import { Map } from "./Map";
import { render } from "@testing-library/react";
import mapbox from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe("Map", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Map />);
    expect(mapbox.Map).toHaveBeenCalledWith({
      center:[37.61778, 55.75583], 
      container: getByTestId('map'),
      style:"mapbox://styles/rezetat/ckc93aol83t7q1ipioyust4u8",
      zoom: 10,
    });
  });
});
