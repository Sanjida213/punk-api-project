import { useState } from "react";
import Button from "../Button/Button";
import "./Card.scss"


type CardProps = {
  image: string;
  name: string;
  description: string;
  // info: string;
}

const Card = ({image, name, description} : CardProps) => {
  // const [showBack, setShowBack] = useState<boolean>(false);

  // const handleClick = () => {
  //   setShowBack(!showBack);
  // };

  // const frontContent = (
  //   <div onClick={handleClick}>
  //     <Button label="Find out more" variant="primary" />
  //   </div>
  // );

  // const backContent = (
  //   <>
  //    <img
  //       src="https://www.freeiconspng.com/thumbs/close-button-png/close-button-png-24.png"
  //       className="button__cross"
  //       onClick={handleClick}
  //       alt="Close text"
  //     />
  //   {info.split(".")
  //   .map((sentence, index) => <p key={index}>{`${sentence}.`}</p>)
  //   .slice(0, -1)}
  //   </>
  // );

  // let contentClassName = "beer__content";
  // if (showBack) contentClassName += " beer__content--back";

  return (
    <div className="card">
      <div className="card__info">
        <img src={image} alt="card__image" />
        <p className="card__name">{name}</p>
        <p className="card__description">{description}</p>

        {/* <div className="card__button">
          <Button variant="primary" label="More"/> 
        </div> */}
         {/* <div className={contentClassName}>
          <h3 className="card__name">{name}</h3>
          {showBack ? backContent : frontContent}
        </div> */}
      </div>

    </div>
  )
}  

export default Card;