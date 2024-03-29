import "./NavBar.scss"
import SearchBox from "../SearchBox/SearchBox";
import beers from "../../data";
import { Beer } from "../../types";
import { FormEvent, useState } from "react";
import Main from "../Main/Main";
import Card from "../Card/Card";

// const NavBar = () => {


//   return (
//     <div className="navbar">
//       <SearchBox beers={beers} />
//     </div>
//   )
// }

// export default NavBar;


type NavBarProps = {
  onSearch: (value: string) => void;
};

const NavBar = ({ onSearch }: NavBarProps) => {
  // const [searchTerm, setSearchTerm] = useState<string>("");

  // const handleInput = (event: FormEvent<HTMLInputElement>) => {
  //   const cleanInput = event.currentTarget.value.toLowerCase();
  //   setSearchTerm(cleanInput);
  // };

  // const filteredBeer = beers.filter((beer) =>
  //   beer.name.toLowerCase().includes(searchTerm)
  // );

  return (
    <>
      <SearchBox
        // label="beers"
        // handleInput={handleInput}
        onSearch={onSearch}
      />
      {/* <Main beers={filteredBeer}/> */}
    </>
  );
};

export default NavBar;
