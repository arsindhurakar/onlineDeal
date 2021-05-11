import React from "react";
import { useHistory } from "react-router-dom";
import "./SearchResult.scss";

function SearchResult({
  image,
  alt,
  title,
  price,
  about,
  setSearchTerm,
  setIsSearch,
}) {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: "/product",
      state: { image, alt, title, price, about },
    });
    setSearchTerm(title);
    setIsSearch(false);
  };

  return (
    <div className="searchResult" onClick={handleClick}>
      <p>{title}</p>
    </div>
  );
}

export default SearchResult;
