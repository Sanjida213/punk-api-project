import { useState } from "react";
import Button from "../Button/Button";
import "./Card.scss"


type CardProps = {
  image: string | null;
  name: string;
  description: string;
  info: string[];
}

const Card = ({image, name, description, info} : CardProps) => {

  const [showBack, setShowBack] = useState<boolean>(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  // if (image === null) 
  //   return (
  //     <img src="https://static.thenounproject.com/png/1202535-200.pn"
  //   )
  // }

  const frontContent = (
    <div onClick={handleClick}>
      <Button label="Find out more" variant="primary" />
    </div>
  );

  const backContent = (
    <>
    <img
        src="https://static.thenounproject.com/png/1202535-200.png"
        className="card__cross"
        onClick={handleClick}
        alt="Close text"
      />
      <h3 className="beer__content--heading">{name} pairs perfectly well with:</h3>
      <ul className="info-list">
        <li>
          {info.map((sentence, index) => <li key={index}>{`${sentence}.`}</li>)
          .slice(0, -1)}
        </li>
      </ul>
      
    
    </>
  )

  
  let contentClassName = "beer__content";
  if (showBack) contentClassName += " beer__content--back";

  return (
    <div className="card">
      <div className="card__info">
        <img src={image ?? undefined} alt="card__image" />
        <p className="card__name">{name}</p>
        <p className="card__description">{description}</p>
         <div className={contentClassName}>
          <p className="name">{name}</p>
          {showBack ? backContent : frontContent}
        </div>
      </div>

    </div>
  )
}  

export default Card;