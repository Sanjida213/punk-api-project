import "./SearchBox.scss"
import { FormEvent, useState } from "react";
import { Beer } from "../../types";
import Card from "../Card/Card";

// type SearchBoxProps = {
//   beers: Beer[];
// }

// const SearchBox = ( {beers} : SearchBoxProps) => {
//   const [searchValue, setSearchValue] = useState<string>("");

//   const handleInput = (event: FormEvent<HTMLInputElement>) => {
//     const input = event.currentTarget.value.toLowerCase();
//     setSearchValue(input)
//   };

//   const filteredItems = beers.filter((beer) => beer.name.toLowerCase().includes(searchValue))

//   return (

//     <div className="searchbox-input">
//     <input
//       type="text"
//       placeholder="Search..."
//       value={searchValue}
//       onChange={handleInput}
//     />
//   </div>
//   )
//   };

  


// export default SearchBox;

import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  // label: string;
  // searchTerm: string;
  // handleInput: FormEventHandler<HTMLInputElement>;
  onSearch: (value: string) => void;
};

const SearchBox = ({  onSearch }: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
    onSearch(cleanInput)
  }

  return (
    <div className="search-box">
      
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </div>
  );
};

export default SearchBox;
