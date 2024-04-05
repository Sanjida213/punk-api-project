import { useState } from "react";
import Button from "../Button/Button";
import WhiteCross from  "../../assets/images/white-cross.png"
import "./Card.scss"


type CardProps = {
  image: string | null;
  name: string;
  description: string;
  foodParing: string[];
  brewersTips: string
}

const Card = ({image, name, description, foodParing, brewersTips} : CardProps) => {

  const [showBack, setShowBack] = useState<boolean>(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };



  const frontContent = (
    <div onClick={handleClick}>
      <Button label="Find out more" variant="primary" />
    </div>
  );

  const backContent = (
    <>
    <img
        src={WhiteCross}
        className="card__cross"
        onClick={handleClick}
        alt="Close text"
      />
      <h3 className="foodpairing__heading">{name} pairs perfectly well with:</h3>
      <ul className="foodpairing-list">
        <li>
          {foodParing.map((sentence, index) => <li key={index}>{`${sentence}.`}</li>)
          .slice(0, -1)}
        </li>
      </ul>
      
      <h4 className="brewerstips__heading">The Brewers Tips are as follows...</h4>
      <p className="brewerstips__tips">
        {brewersTips}
      </p>
      
    </>
  )

  
  let contentClassName = "card__content";
  if (showBack) contentClassName += " card__content--back";

  return (
    <div className="card">
      <div className="card__info">
        <img src={image ?? undefined} alt="card__image" />
        <p className="card__name">{name}</p>
        <p className="card__description">{description}</p>
         <div className={contentClassName}>
          {/* <p className="beer__name">{name}</p> */}
          {showBack ? backContent : frontContent}
        </div>
      </div>

    </div>
  )
}; 

export default Card;