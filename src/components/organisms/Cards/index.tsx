import Card from "../Card";
import "./styles.scss";

export type CardType = {
  title: string;
  free: string | null;
  price: number | null;
  when: string | null;
  featureList: string[];
};

type CardsProps = {
  cards: CardType[];
};

const Cards = ({ cards }: CardsProps) => {
  return (
    <ul className="Cards">
      {cards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </ul>
  );
};

export default Cards;
