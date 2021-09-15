import "../styles/search.scss";
import { createRef, useState } from "react";

export default function Search({ setSearchedValue, noPerson }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = createRef();

  const search = () => setSearchedValue(inputValue);

  return (
    <div className="search">
      <div className="left">
        <img src="/assets/icon-search.svg" alt="search-icon" />
        <input
          type="text"
          placeholder="Search Github username..."
          ref={inputRef}
          value={inputValue}
          onChange={() => setInputValue(inputRef.current.value)}
        />
      </div>
      <div className="right">
        {noPerson && <h2 className="noResults">No results</h2>}
        <button onClick={search}>Search</button>
      </div>
    </div>
  );
}
