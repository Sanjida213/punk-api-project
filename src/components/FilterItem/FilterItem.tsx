import "./FilterItem.scss"
import { ChangeEvent, useState } from "react"

type FilterItemProps = {
  onFilter: (isChecked: boolean) => void;
}
const FilterItems = ( {onFilter} : FilterItemProps) => {
  const [filterItems, setFilterItems] = useState<boolean>(false)

  // const handleOnChange = () => {
  //   setFilterItems(!filterItems);
  // };

  const handleFilterBox = (event: ChangeEvent<HTMLInputElement>) => {
    const userSelect = event.currentTarget;
    setFilterItems(userSelect);
    onFilter(userSelect)
  }
  
  return (
    <div className="filterbox">
      
      <input
        type="checkbox"
        value={filterItems}
        onInput={handleFilterBox}
        className="filterbox__checked"
      />
    </div>
  );
};

export default FilterItems;

// High Alcohol (ABV value greater than 6%)
// Classic Range (Was first brewed before 2010)
// High Acidity(pH lower than 4)
