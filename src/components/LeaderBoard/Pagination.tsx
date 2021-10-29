import { useState } from "react";
import { leaderBoardPerPage } from "../../utils/helpers";

export const Pagination = ({
  total,
  page: parentPage,
  onChange,
}: {
  total: number;
  page: number
  onChange: (pageIndex: number) => void;
}) => {
  const perPage = leaderBoardPerPage;
  const totalPages = total / perPage;
  const [page, setPage] = useState(parentPage);
  const onPageChange = (pageIndex: number) => {
    setPage(pageIndex);
    onChange(pageIndex);
  };

  const pageNumbers = () => {
    let pageNumbers: JSX.Element[] = [
      <li className={`${0 === page ? "current" : "padding"}`}>
        <a
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onPageChange(0);
          }}
        >
          1
        </a>
      </li>,
    ];
    let firstDots = false;
    let secondDots = false;
    for (let i = 1; i < totalPages - 1; i++) {
      if (i > page + 2) {
        if (secondDots === false) {
          pageNumbers.push(
            <li className="dots-9">
              <span className="dots">...</span>
            </li>
          );
          secondDots = true;
        }
        continue;
      }
      if (i < page - 2) {
        if (firstDots === false) {
          pageNumbers.push(
            <li className="dots-9">
              <span className="dots">...</span>
            </li>
          );
          firstDots = true;
        }
        continue;
      }
      pageNumbers.push(
        <li className={`${i === page ? "current" : "padding"}`}>
          <a
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onPageChange(i);
            }}
          >
            {i + 1}
          </a>
        </li>
      );
    }
    pageNumbers.push(
      <li className={`${totalPages - 1 === page ? "current" : "padding"}`}>
        <a
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onPageChange(totalPages - 1);
          }}
        >
          {totalPages}
        </a>
      </li>
    );
    return pageNumbers;
  };

  return (
    <div className="paging-info">
      <span className="numbers text--smallest">
        {page * perPage + 1} - {page * perPage + perPage} of {total}
      </span>
      <ol className="paging text--medium">
        {page === 0 ? (
          <li>
            <span className="icon icon--left"></span>
          </li>
        ) : (
          <li>
            <a
            href="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onPageChange(page - 1);
              }}
            >
              <span className="icon icon--left"></span>
            </a>
          </li>
        )}
        {pageNumbers()}
        {page !== totalPages -1 ? (
        <li>
          <a
            href="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onPageChange(page + 1);
              }}
           >
            <span className="icon icon--right"></span>
          </a>
        </li>
        ): (
            <li>
                <span className="icon icon--right"></span>
            </li>
        )} 
      </ol>
    </div>
  );
};
