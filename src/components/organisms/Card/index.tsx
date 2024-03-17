import Button from "../../molecules/Button";
import { CardType } from "../Cards";
import "./styles.scss";

type CardProps = {
  card: CardType;
};

const Card = ({ card }: CardProps) => {
  return (
    <div className="Card">
      <div className="card-header">
        <h2 className="card-header__title">{card.title}</h2>
        {card.price && (
          <p
            className="card-header__price"
            aria-label={`$${card.price} ${card.when}`}
          >
            {card.price}
          </p>
        )}
        <p
          className="card-header__description"
          aria-hidden={`${Boolean(card.price)}`}
        >
          {card.free ?? card.when}
        </p>
      </div>
      <div className="card-body">
        <Button text="Buy" />
      </div>
    </div>
  );
};

export default Card;
