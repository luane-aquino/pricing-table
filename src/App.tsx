import "./App.css";
import Cards from "@components/organisms/Cards";

const cardData = [
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
  {
    title: "Basic",
    free: null,
    price: 25,
    when: "Per Month",
    featureList: [
      "Plan Feature First",
      "Plan Feature Second",
      "Plan Feature",
      "Plan Feature Fourth",
      "+ Previous Plan",
    ],
  },
  {
    title: "Pro",
    free: null,
    price: 45,
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

function App() {
  return (
    <>
      <Cards cards={cardData} />
    </>
  );
}

export default App;
