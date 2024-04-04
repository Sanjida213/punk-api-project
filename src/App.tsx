import "./Apps.scss";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import { useState } from "react";
import { FilterOptions } from "./components/FilterItem/FilterItem";

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    abvGreaterThanSix: false,
    classicRange: false,
    phLessThanFour: false,
  });

  const handleInput = (value: string) => {
    setSearchValue(value.toLowerCase());
  };

  const handleFilter = (newOptions: FilterOptions) => {
    setFilterOptions(newOptions);
  };

  return (
    <div className="app">
      <NavBar
        onSearch={handleInput}
        onFilter={handleFilter}
        filterOptions={filterOptions}
      />
      <Main
        searchValue={searchValue}
        // beersData={beers}
        filterOptions={filterOptions}
      />
    </div>
  );
};

export default App;
