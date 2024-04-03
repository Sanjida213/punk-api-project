import "./Main.scss";
import CardList from "../CardList/CardList";
import { Beer } from "../../types";

type MainProps = {
  searchValue: string;
  // filterOption: 
  beers: Beer[];
};
const Main = ({ searchValue, beers }: MainProps) => {
  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchValue)
  );

  const filteredOption = beers.filter((beer) => beer.abv > 6)
  
  return (
    <div className="main">
      <CardList beers={filteredBeers} />
    </div>
  );
};

export default Main;
