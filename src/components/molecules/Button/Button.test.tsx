import { render, screen, userEvent } from "../../../../test/test-utils";
import Button from "./";
/*
- should render button with text
*/

// describe("Button", () => {
//   render();
// });
test("that jest is working", () => {
  render(<Button text="hello" />);
  expect(true).toBe(true);
  expect(screen.getByText("hello")).toBeVisible();
});
