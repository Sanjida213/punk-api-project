import "./FilterItem.scss"
import { ChangeEvent, useState } from "react"
import { Beer } from "../../types";
import beers from "../../data";


type FilterItemProps = {
  onFilter: () => void;
}
const FilterItems = ( {onFilter} : FilterItemProps) => {
  const [filterItems, setFilterItems] = useState<Beer[]>([])

  const filteredAbv = beers.filter((beer) => 
    beer.abv > 6
    )

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.currentTarget.value);
    const filteredBeers = beers.filter(beer => beer.abv > value);
    setFilterItems(filteredBeers);
    onFilter(filteredBeers)
  }
  
  return (
    <div className="search-box">
      
      <input
        type="checkbox"
        onChange={handleFilter}
        className="filter-box__input"
      /> {filterItems.map(beer => (
        beer.abv
      ))}
    </div>
  );
};


// High Alcohol (ABV value greater than 6%)
// Classic Range (Was first brewed before 2010)
// High Acidity(pH lower than 4)
