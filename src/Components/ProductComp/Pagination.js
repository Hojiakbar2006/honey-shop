import { React } from "react";
import "./style.css";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
  postLeng,
}) => {
  const pageNumbers = [];
  const maxPageNumber = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= maxPageNumber; i++) {
    pageNumbers.push(i);
  }

  let left = currentPage - 1;
  let right = currentPage + 1;

  return (
    <>
      {totalPosts <= postsPerPage ? (
        ""
      ) : (
        <div className="numbersCard">
          <div>
            <button
              className="pageLink"
              onClick={() =>
                setCurrentPage(currentPage !== 1 ? left : currentPage)
              }
            >
              <div className="left"></div>
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={
                  currentPage === number ? "pageLink btnActive" : "pageLink"
                }
              >
                {number}
              </button>
            ))}
            <button
              className="pageLink"
              onClick={() =>
                setCurrentPage(currentPage !== maxPageNumber ? right : 1)
              }
            >
              <div className="right"></div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
