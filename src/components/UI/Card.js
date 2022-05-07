import classes from "./Card.module.css";

const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;  // As Card is our custom component so we have to define it by props.className
}

export default Card;