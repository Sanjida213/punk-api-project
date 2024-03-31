import "./NavBar.scss"
import SearchBox from "../SearchBox/SearchBox";
import { FormEvent, useState } from "react";


type NavBarProps = {
  onSearch: (value: string) => void;
};

const NavBar = ({ onSearch }: NavBarProps) => {

  // const handleChange = (event) => {
  //   const {value, checked} = event.target
  //   if(checked) {
  //     setValue(pre => {

  //     })
  //   }
  // }
  return (
    <div className="navbar">
      <SearchBox
        onSearch={onSearch}
      />
{/* 
    <input type="checkbox" value="Alcohol > 6%" onChange={handleChange} />Alcohol above 6% */}
    </div>
      
  );
};

export default NavBar;
