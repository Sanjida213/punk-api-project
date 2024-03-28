import "./CardList.scss"
import Card from "../Card/Card";
import beers from "../../data";

// do we need a types prop for this? 


const CardList = () => {

  return (
    <Card beers={beers}/>
  )
}

export default CardList;