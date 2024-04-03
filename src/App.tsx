import "./Apps.scss";
import NavBar from "./components/NavBar/NavBar" ;
import Main from "./components/Main/Main";
import beers from "./data";
import { useState } from "react";
import { FilterOptions } from "./components/FilterItem/FilterItem";
import { Beer } from "./types";

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    abvGreaterThanSix : false,
    classicRange : false,
    phLessThanFour : false});

    const filteringBeers = () : Beer[] => {
      // const filteredAbv = beers.filter((beer) => beer.abv > 6)
      // const filteredClassicRange = beers.filter((beer) => parseInt(beer.first_brewed) > 2010)
      // const filteredAcidic = beers.filter((beer) => beer.ph < 4)

      let filteredBeers = beers;
      
      if (filterOptions.abvGreaterThanSix) {
        filteredBeers = filteredBeers.filter((beer) => beer.abv > 6);
      }
    
      if (filterOptions.classicRange) {
        filteredBeers = filteredBeers.filter((beer) => {
          const yearPart = parseInt(beer.first_brewed.split("/")[1]);
          return yearPart > 2010;
        })};
    
      if (filterOptions.phLessThanFour) {
        filteredBeers = filteredBeers.filter((beer) => beer.ph < 4);
      }
      
      
      return (
        filteredBeers
      )
    }
    

  const handleInput = (value: string) => {
    setSearchValue(value.toLowerCase());
  };

  const handleFilter = (newOptions: FilterOptions) => { setFilterOptions(newOptions);
  //   setFilterOptions({abvGreaterThanSix : true,
  //     classicRange : true,
  //     phLessThanFour : true}); 
  //     // research how to chang eonly one object
  };
  return (
    
    <div className="app">
      <NavBar onSearch={handleInput} onFilter={handleFilter} filterOptions={filterOptions} />
      <Main searchValue={searchValue} beers={filteringBeers()} filterOptions={filterOptions} />
    </div>
  )
}


export default App;