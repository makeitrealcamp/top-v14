import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("when the page is mounted", () => {
  it("should render btn Submit", () => {
    render(<Home />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("should render input placeholder", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText("Todo")).toBeInTheDocument();
  });
});
