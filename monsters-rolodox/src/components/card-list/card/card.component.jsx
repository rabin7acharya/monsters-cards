import "./card.style.css";

export const Card = (props) => (
  <div className="card-container col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&`}
    />
    <h3 className="mt-4 p-0 fw-bolder">{props.monster.name}</h3>
    <p className="m-0">{props.monster.email}</p>
  </div>
);
