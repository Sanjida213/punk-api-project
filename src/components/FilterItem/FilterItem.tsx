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
      
      <input
          type="checkbox"
          checked={filterOptions.abvGreaterThanSix}
          onChange={() => handleFilterBox('abvGreaterThanSix')}
        /> High ABV 

      <input
          type="checkbox"
          checked={filterOptions.classicRange}
          onChange={() => handleFilterBox('classicRange')}
        /> Classic Range

      <input
          type="checkbox"
          checked={filterOptions.phLessThanFour}
          onChange={() => handleFilterBox('phLessThanFour')}
        /> Acidic
    </div>

  );
};

export default FilterItems;

// High Alcohol (ABV value greater than 6%)
// Classic Range (Was first brewed before 2010)
// High Acidity(pH lower than 4)
