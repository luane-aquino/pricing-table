import { render, screen } from "../../../test/test-utils";
import Button from "./";

describe("Button", () => {
  test("should show button text", () => {
    render(<Button text="hello" />);
    expect(screen.getByRole("button", { name: "hello" })).toBeVisible();
  });
});
