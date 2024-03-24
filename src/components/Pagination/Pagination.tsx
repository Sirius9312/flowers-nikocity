import { useContext } from "react";
import { getPages } from "../../helpers/functions";
import { FlowersContext } from "../../stores/FlowersContext";
import { Link, useSearchParams } from "react-router-dom";
import { Flower } from "../../type/Flower";
import { getSearchWith } from "../../getSearch/searchHelpers";
import './Pagination.scss';

type Props = {
  products: Flower[],
};

export const Pagination: React.FC<Props> = ({
  products
}) => {
  const {
    setSearchWith,
    currPage,
    perPage,
  } = useContext(FlowersContext);

  const pages = getPages(1, Math.ceil(products.length / +perPage));
  const [searchParams] = useSearchParams();

  const handlePrevPage = () => {
    setSearchWith({ currPage: +currPage - 1 || null })
  }

  const handlePage = (page: number) => {
    return (
      {
        search: getSearchWith(
          searchParams,
          { currPage: page.toString() || null },
        ),
      }
    );
  };

  const handleNextPage = () => {
    setSearchWith({ currPage: +currPage + 1 || null })
  }

  return (
    <div className="pagination">
      {
        pages.length > 1 && (
          <ul className="pagination__list-pages">
            <li className="pagination__item">
              <button
                type="button"
                onClick={handlePrevPage}
                disabled={+currPage <= 1}
                className={+currPage <= 1 ? "pagination__button pagination__button--left-disabled" : "pagination__button"}
              >
                <div
                  className={+currPage <= 1 ? "icon icon--disabled-left-arrow" : "icon icon--left-arrow"}
                />
              </button>
            </li>

            {
              pages.map(page => (
                <li
                  key={page}
                  className="pagination__item"
                >
                  <Link
                    to={handlePage(page)}
                    className={
                      page.toString() === currPage
                        ? "pagination__page-link pagination__page-link--active"
                        : "pagination__page-link"
                    }
                  >
                    {page}
                  </Link>
                </li>
              ))
            }
            
            <li className="pagination__item">
              <button
                type="button"
                onClick={handleNextPage}
                disabled={+currPage >= pages.length}
                className={+currPage >= pages.length ? "pagination__button pagination__button--right-disabled" : "pagination__button"}
              >
                <div
                  className={+currPage >= pages.length ? "icon icon--disabled-right-arrow" : "icon icon--right-arrow"}
                />
              </button>
            </li>
          </ul>
        )
      }
    </div>
  );
};
