import "./NavBar.scss"
import SearchBox from "../SearchBox/SearchBox";
import { FormEvent, useState } from "react";


type NavBarProps = {
  onSearch: (value: string) => void;
  onFilter: () => void;
};
// we want on search in both nav and main so we pass it down as props in both
const NavBar = ({ onSearch }: NavBarProps) => {

 
  return (
    <div className="navbar">
      <SearchBox
        onSearch={onSearch}
      />
    </div>
      
  );
};

export default NavBar;
