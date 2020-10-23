import React from "react";

function Paginator(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  // ' i <= pagesCount ' insert in for
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return (
      <div className="pagination">
        {pages.map(p => (
          <span
            key={p}
            onClick={() => props.onPageChange(p)}
            className={props.currentPage === p ? "active" : ""}
          >
            {p}
          </span>
        ))}
      </div>
  );
}

export default Paginator;
