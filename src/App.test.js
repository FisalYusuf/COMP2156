import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders student information system", () => {
  render(<App />);
  const heading = screen.getByText(/Student Information System/i);
  expect(heading).toBeInTheDocument();
});
