import "./NavBar.scss"
import SearchBox from "../SearchBox/SearchBox";
import FilterItems from "../FilterItem/FilterItem";
import { FilterOptions } from "../FilterItem/FilterItem";


type NavBarProps = {
  onSearch: (value: string) => void;
  onFilter: (newOptions: FilterOptions) => void;
  filterOptions: {
    abvGreaterThanSix: boolean;
    classicRange: boolean;
    phLessThanFour: boolean 
  }
};

const NavBar = ({ onSearch, onFilter, filterOptions }: NavBarProps) => {
 
  return (
    <div className="navbar">
      <div className="navbar__searchbox">
        <SearchBox
        onSearch={onSearch}
      />
      </div>
      <div className="navbar__filter">
        <FilterItems 
          onFilter={onFilter}
          filterOptions = {filterOptions}/>
      </div>
    </div>
      
  );
};

export default NavBar;
