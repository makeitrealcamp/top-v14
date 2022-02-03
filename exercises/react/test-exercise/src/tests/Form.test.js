import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../components/Form";

describe("initial render", () => {
  it("should render submit button", () => {
    render(<Form />);
    screen.getByText("Submit");
  });
});
