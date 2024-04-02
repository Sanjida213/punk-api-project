import Button from "../Button/Button";
import "./Card.scss"


type CardProps = {
  image: string;
  name: string;
  description: string;
}

const Card = ({image, name, description} : CardProps) => {

  return (
    <div className="card">
      <div className="card__info">
        <img src={image} alt="card__image" />
        <p className="card__name">{name}</p>
        <p className="card__description">{description}</p>

        <div className="card__button">
          <Button variant="primary" label="More"/> 
        </div>
      </div>

    </div>
  )
}  

export default Card;