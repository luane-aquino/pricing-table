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
        <ul className="features">
          {card.featureList.map((feature, index) => (
            <li key={index} className="features__item">
              <p className="features__text">{feature}</p>
            </li>
          ))}
        </ul>
        <Button text="Buy" />
      </div>
    </div>
  );
};

export default Card;
