import { render, screen } from "@testing-library/react";
import Result from "../Result";

it("Should have default content when messages null", () => {
  render(<Result />);
  const defaultText = screen.getByText(/belum ada pesan/i);
  expect(defaultText).toBeInTheDocument();
});
