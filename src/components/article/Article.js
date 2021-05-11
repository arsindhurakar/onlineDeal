import React from "react";
import { useHistory } from "react-router-dom";
import "./Article.scss";

function Article({ image, alt, title, price, about }) {
  const history = useHistory();
  return (
    <div
      className="article"
      onClick={() =>
        history.push({
          pathname: "/product",
          state: { image, alt, title, price, about },
        })
      }
    >
      <div className="article__image">
        <img src={image} alt={alt} />
      </div>
      <div className="article__description">
        <p>{title}</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
}

export default Article;
