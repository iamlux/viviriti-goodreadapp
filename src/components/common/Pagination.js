import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, pageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  // eslint-disable-next-line

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            {/* eslint-disable */}
            <a className="page-link" onClick={() => pageChange(page)}>
              {/* eslint-disable */}
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
