import "./FilterItem.scss"

export type FilterOptions = {
  abvGreaterThanSix: boolean;
  classicRange: boolean;
  phLessThanFour: boolean 
}

type FilterItemProps = {
  onFilter: (newOptions: FilterOptions) => void;
  filterOptions: FilterOptions
}


const FilterItems = ( {onFilter, filterOptions} : FilterItemProps) => {

  
  const handleFilterBox = (options: keyof FilterOptions) => {
    onFilter({ ...filterOptions, [options]: !filterOptions[options] });
  };

  
  return (
    <div className="filterbox">
      
      <div className="filterbox__input">
      <input
          type="checkbox"
          checked={filterOptions.abvGreaterThanSix}
          onChange={() => handleFilterBox('abvGreaterThanSix')}
        /> <label>High ABV</label> 
      </div> 
      
      <div className="filterbox__input">
      <input
          type="checkbox"
          checked={filterOptions.classicRange}
          onChange={() => handleFilterBox('classicRange')}
        /> <label>Classic Range</label> 
      </div>
      
      <div className="filterbox__input">
      <input
          type="checkbox"
          checked={filterOptions.phLessThanFour}
          onChange={() => handleFilterBox('phLessThanFour')}
        /> <label>Acidic</label> 
      </div>
      
    </div>

  );
};

export default FilterItems;

// High Alcohol (ABV value greater than 6%)
// Classic Range (Was first brewed before 2010)
// High Acidity(pH lower than 4)
