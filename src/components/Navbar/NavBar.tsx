import "./NavBar.scss"
import SearchBox from "../SearchBox/SearchBox";
import FilterItems from "../FilterItem/FilterItem";


type NavBarProps = {
  onSearch: (value: string) => void;
  onFilter: (isChecked: boolean) => void;
};
// we want on search in both nav and main so we pass it down as props in both
const NavBar = ({ onSearch, onFilter }: NavBarProps) => {

 
  return (
    <div className="navbar">
      <SearchBox
        onSearch={onSearch}
      />
      <FilterItems 
      onFilter={onFilter}/>
    </div>
      
  );
};

export default NavBar;
