import { useContext, useEffect, useRef, useState } from "react";
import { Flower } from "../../type/Flower";
import { Pagination } from "../Pagination/Pagination";
import { ProductCard } from "../ProductCard/ProductCard";
import { FlowersContext } from "../../stores/FlowersContext";
import { SortFlowers, arrSelectPerPage, arrSelectSort } from "../../helpers/variables";
import './ProductsList.scss';

type Props = {
  products: Flower[],
};

function preparedSort(
  products: Flower[],
  { sortProducts }: { sortProducts: string },
) {
  let copyProducts = [...products];

  if (sortProducts) {
    switch (sortProducts) {
      case SortFlowers.alphabet:
        return copyProducts.sort((item1, item2) => item1.name.localeCompare(item2.name));
      case SortFlowers.reverseAlphaber:
        return copyProducts.sort((item1, item2) => item2.name.localeCompare(item1.name));
      default:
        return copyProducts;
    }
  }

  return copyProducts;
}

export const ProductsList: React.FC<Props> = ({ products }) => {
  const {
    perPage,
    currPage,
    query,
    sortProducts,
    setSearchWith,
  } = useContext(FlowersContext);

  const sortedProducts = preparedSort (products, { sortProducts });

  const startIndex = (+perPage * +currPage) - +perPage + 1;
  const endIndex = (+perPage * +currPage);

  const sliceProducts = perPage !== 'Усі'
    ? sortedProducts.slice(startIndex - 1, endIndex)
    : sortedProducts;

  const sortDropDown = useRef<HTMLDivElement>(null);
  const [focusSort, setFocusSort] = useState(false);
  const countItemsDropDown = useRef<HTMLDivElement>(null);
  const [focusCountItems, setFocusCountItems] = useState(false);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (sortDropDown.current
        && focusSort
        && !sortDropDown.current.contains(e.target as Node)) {
        setFocusSort(false);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [focusSort]);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (countItemsDropDown.current
        && focusCountItems
        && !countItemsDropDown.current.contains(e.target as Node)) {
        setFocusCountItems(false);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [focusCountItems]);

  const handleDropSort = () => {
    if (focusSort) {
      setFocusSort(false);
    } else {
      setFocusSort(true);
    }
  }

  const handleSelectSort = (sel: string) => {
    setSearchWith({ sortProducts: sel || null });
    setFocusSort(false);
  };

  const handleDropCountItems = () => {
    if (focusCountItems) {
      setFocusCountItems(false);
    } else {
      setFocusCountItems(true);
    }
  }

  const handleSelectCountItems = (sel: string) => {
    setSearchWith({ perPage: sel || null });
    setFocusCountItems(false);
  };

  return (
    <div className="products">
      {
        !query && (
          <div className="products__selects-container">
            <div className="grid-cover">
              <div className="products__select products__select--category">
                <h3 className="products__product-select-title">
                  Сортування
                </h3>

                <div
                  className="products__drop-down-content"
                  ref={sortDropDown}
                >
                  <button
                    className="products__drop-button"
                    onClick={handleDropSort}
                  >
                    <span>
                      {sortProducts}
                    </span>

                    <div className={focusSort ? "icon icon--up-arrow" : "icon icon--down-arrow"} />
                  </button>

                  <div
                    className={
                      focusSort
                        ? "products__drop-list--active"
                        : "products__drop-list"
                      }
                  >
                    {
                      arrSelectSort.map(sel => (
                        <button
                          key={sel}
                          className="products__drop-item"
                          onClick={() => handleSelectSort(sel)}
                        >
                          {sel}
                        </button>
                      ))
                    }
                  </div>
                </div>
              </div>

              <div className="products__select products__select--page-counts">
                <h3 className="products__product-select-title">
                  Кількість на сторінці
                </h3>

                <div
                  className="products__drop-down-content"
                  ref={countItemsDropDown}
                >
                  <button
                    className="products__drop-button"
                    onClick={handleDropCountItems}
                  >
                    <span>
                      {perPage}
                    </span>

                    <div className={focusCountItems ? "icon icon--up-arrow" : "icon icon--down-arrow"} />
                  </button>

                  <div
                    className={
                      focusCountItems
                        ? "products__drop-list--active"
                        : "products__drop-list"
                      }
                  >
                    {
                      arrSelectPerPage.map(sel => (
                        <button
                          key={sel}
                          className="products__drop-item"
                          onClick={() => handleSelectCountItems(sel)}
                        >
                          {sel}
                        </button>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      
      <div className="flex-container">
        {
          sliceProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>

      {
        !query && perPage !== 'Усі' && (
          <Pagination
            products={products}
          />
        )
      }
    </div>
  );
};