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
          foodParing={beer.food_pairing}
          brewersTips={beer.brewers_tips}
          /> 
      ))}
    </div>
  )
}

export default CardList;

