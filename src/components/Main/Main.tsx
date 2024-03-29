import "./Main.scss";
import Card from "../Card/Card";
import beers from "../../data";
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
      <Card beers={filteredBeers} />
    </div>
  );
};

export default Main;
