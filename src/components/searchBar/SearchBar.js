import React, { useState, useEffect } from "react";
import "./SearchBar.scss";

import { apiData } from "../../services";
import { SearchResult } from "../searchResult";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    apiData().then((res) => {
      setSearchResults(res.data.products);
    });
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSearch(true);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search in OnlineDeal"
        value={searchTerm}
        onChange={handleChange}
      />
      {/* <button>
        <i className="fas fa-search fa-lg"></i>
      </button> */}
      <div className="searchBar__searchResults">
        {isSearch &&
          searchResults
            .filter((item) => {
              if (searchTerm === "") {
                return null;
              }
              return item.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((result) => (
              <SearchResult
                key={result.id}
                title={result.title}
                image={result.image}
                alt={result.alt}
                price={result.price}
                about={result.about}
                setSearchTerm={setSearchTerm}
                setIsSearch={setIsSearch}
              />
            ))}
      </div>
    </div>
  );
}

export default SearchBar;
