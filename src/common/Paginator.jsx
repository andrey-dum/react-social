import React from "react";

function Paginator({totalItemsCount, pageSize, onPageChange, currentPage, portionSize=20}) {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = React.useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
      <div className="pagination">
        {portionNumber > 1 && 
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => (
            <span
              key={p}
              onClick={() => onPageChange(p)}
              className={currentPage === p ? "active" : ""}
            >
              {p}
            </span>
        ))}

        {portionCount > portionNumber && 
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
      </div>
  );
}

export default Paginator;
