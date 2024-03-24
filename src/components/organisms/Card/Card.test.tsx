import { render, screen } from "../../../test/test-utils";
import Card from "./";

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

describe("Card", () => {
  test("should show free card", () => {
    render(<Card card={cardsMock[0]} />);
    expect(screen.getByText("Free")).toBeVisible();
    expect(screen.getByText("Forever")).toBeVisible();
    expect(screen.getByText("Plan Feature First")).toBeVisible();
    expect(screen.getByText("Plan Feature Second")).toBeVisible();
    expect(screen.getByText("Plan Feature")).toBeVisible();
    expect(screen.getByText("Plan Feature Fourth")).toBeVisible();
    expect(screen.getByText("+ Previous Plan")).toBeVisible();
    expect(screen.getByRole("button", { name: "Buy" })).toBeVisible();
  });
  test("should show paid card", () => {
    render(<Card card={cardsMock[1]} />);
    expect(screen.getByText("Starter")).toBeVisible();
    expect(screen.getByText("10")).toBeVisible();
    expect(screen.getByText("Per Month")).toBeVisible();
    expect(screen.getByLabelText("$10 Per Month")).toBeVisible();
    expect(screen.getByText("Plan Feature First")).toBeVisible();
    expect(screen.getByText("Plan Feature Second")).toBeVisible();
    expect(screen.getByText("Plan Feature")).toBeVisible();
    expect(screen.getByText("Plan Feature Fourth")).toBeVisible();
    expect(screen.getByText("+ Previous Plan")).toBeVisible();
    expect(screen.getByRole("button", { name: "Buy" })).toBeVisible();
  });
});
