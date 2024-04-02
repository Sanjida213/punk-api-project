import "./CardList.scss"
import { Beer } from "../../types";
import Card from "../Card/Card";

type CardListProps = {
  beers: Beer[];
}

const CardList = ({beers} : CardListProps) => {

  return (
    <div className="cardlist">
      
      {beers.map(beer => (
        <Card 
          key={beer.id}
          image = {beer.image_url}
          name = {beer.name}
          description={beer.description}
          /> 
      ))}
    </div>
  )
}

export default CardList;

// can do front content and back content like ArtistTile as extension