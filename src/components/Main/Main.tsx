import "./Main.scss";
import CardList from "../CardList/CardList";
import { FilterOptions } from "../FilterItem/FilterItem";
import beersData from "../../Data/beersData";

type MainProps = {
  searchValue: string;
  filterOptions: FilterOptions
  // beers: Beer[];
};
const Main = ({ searchValue, filterOptions }: MainProps) => {
  
  const filteredBeers = beersData.filter((beer) => {
    const searchbox = beer.name.toLowerCase().includes(searchValue)

    return (
      searchbox && 
      (!filterOptions.abvGreaterThanSix || beer.abv > 6) &&
      (!filterOptions.classicRange || parseInt(beer.first_brewed.split("/")[1]) < 2010) &&
      (!filterOptions.phLessThanFour || beer.ph != null && beer.ph < 4)
    );
  });

  
  return (
    <div className="main">
      <CardList beers={filteredBeers} />
    </div>
  );
};

export default Main;
