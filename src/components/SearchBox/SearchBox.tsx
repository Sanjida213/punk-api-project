import "./SearchBox.scss"
import { FormEvent, useState } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
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
