import "./Main.scss";
import CardList from "../CardList/CardList";
import { Beer } from "../../types";

type MainProps = {
  searchValue: string;
  beers: Beer[];
};
const Main = ({ searchValue, beers }: MainProps) => {
  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchValue)
  );
  
  return (
    <div className="main">
      <CardList beers={filteredBeers} />
    </div>
  );
};

export default Main;
