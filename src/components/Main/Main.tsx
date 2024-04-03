import "./Main.scss";
import CardList from "../CardList/CardList";
import { Beer } from "../../types";

type MainProps = {
  searchValue: string;
  filterOptions: {
    abvGreaterThanSix: boolean;
    classicRange: boolean;
    phLessThanFour: boolean 
  }
  beers: Beer[];
};
const Main = ({ searchValue, beers, filterOptions }: MainProps) => {
  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchValue)
  );

  const filteredAbv = beers.filter((beer) => beer.abv > 6)
  const filteredClassicRange = beers.filter((beer) => beer.first_brewed > "2010")
  const filteredAcidic = beers.filter((beer) => beer.ph < 4)

  if (filterOptions.abvGreaterThanSix === true) {
    return filteredAbv;
  }

  if (filterOptions.classicRange === true) {
    return filteredClassicRange;
  }
  
  if (filterOptions.phLessThanFour === true) {
    return filteredAcidic;
  }

  
  return (
    <div className="main">
      <CardList beers={filteredBeers} />
    </div>
  );
};

export default Main;
