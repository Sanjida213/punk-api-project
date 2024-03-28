import "./Card.scss"
import { Beer } from "../../types";

type CardProps = {
  beers: Beer[];
}

const Card = ({beers} : CardProps) => {

  return (
    <div className="card">
      {beers.map(beer => (
        <div className="card__info" key={beer.id}>
          <img src={beer.image_url} alt="card__image" />
          <p className="card__name">{beer.name}</p>
          <p className="card__description">{beer.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Card;

// can do front content and back content like ArtistTile as extension