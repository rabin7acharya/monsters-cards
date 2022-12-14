import "./card-list.style.css";
import { Card } from "./card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list container">
      <div className="row">
        {props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    </div>
  );
};
