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

  const handleInput = (value: string) => {
    setSearchValue(value.toLowerCase());
  };

  const handleFilter = (newOptions: FilterOptions) => { setFilterOptions(newOptions);
  };

  return (
    
    <div className="app">
      <NavBar onSearch={handleInput} onFilter={handleFilter} filterOptions={filterOptions} />
      <Main searchValue={searchValue} beers={beers} filterOptions={filterOptions} />
    </div>
  )
}


export default App;