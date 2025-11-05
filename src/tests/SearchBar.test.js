import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("updates input value when user types", () => {
  const handleChange = jest.fn();

  render(<SearchBar value="" onChange={handleChange} />);

  const input = screen.getByPlaceholderText("Search by title...");

  fireEvent.change(input, { target: { value: "React" } });

  expect(handleChange).toHaveBeenCalled();
});
