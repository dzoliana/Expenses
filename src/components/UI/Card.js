import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  //ovim osiguravamo da je bilo koja vrijednost postavljena na 'className' prop dodana ovom dugom stringu 'classes' koji se zatim konačno postavlja na div unutar 'Card' (linija ispod).
  return <div className={classes}>{props.children}</div>;
};
export default Card;
