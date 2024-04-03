import "./Apps.scss";
import NavBar from "./components/NavBar/NavBar" ;
import Main from "./components/Main/Main";
import beers from "./data";
import { useState } from "react";


const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  // const [filterOption, setFilterOption] = useState<boolean>(false);

  const handleInput = (value: string) => {
    setSearchValue(value.toLowerCase());
  };

  // const handleFilter = (value: boolean) => {
  //   setFilterOption(false);
  // };
  return (
    
    <div className="app">
      <NavBar onSearch={handleInput} />
      <Main searchValue={searchValue} beers={beers}/>
    </div>
  )
}


export default App;