import { render, screen } from "../../../test/test-utils";
import Cards from "./";

const cardsMock = [
  {
    title: "Free",
    free: "Forever",
    price: null,
    when: null,
    featureList: [
      "Plan Feature First",
      "Plan Feature Second",
      "Plan Feature",
      "Plan Feature Fourth",
      "+ Previous Plan",
    ],
  },
  {
    title: "Starter",
    free: null,
    price: 10,
    when: "Per Month",
    featureList: [
      "Plan Feature First",
      "Plan Feature Second",
      "Plan Feature",
      "Plan Feature Fourth",
      "+ Previous Plan",
    ],
  },
];

describe("Cards", () => {
  test("should show list of cards", () => {
    render(<Cards cards={cardsMock} />);
    expect(screen.getAllByTestId("card").length).toBe(2);
    expect(screen.getByText("Free")).toBeVisible();
    expect(screen.getByText("Starter")).toBeVisible();
  });
});
