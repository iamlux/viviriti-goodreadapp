import React from "react";

const SearchResult = props => {
  const { results } = props;
  return (
    <div className="cards">
        {results.map(book => (
          <article key={book.best_book[0].title} className="card">
            <a href="/">
              <figure className="thumbnail">
                <img className="mr-3" src={book.best_book[0].image_url[0]} alt="" />
              </figure>
              <div className="card-content">
                <p>{book.best_book[0].title}</p>
                <h4>{book.best_book[0].author[0].name[0]}</h4>
              </div>
            </a>
          </article>
        ))}
    </div>
  );
};

export default SearchResult;
