import { useContext, useEffect, useMemo } from "react";
import { FlowersContext } from "../stores/FlowersContext";
import { ProductsList } from "../components/ProductsList/ProductsList";
import { Loader } from "../components/Loader";

export const AlstromeriaPage = () => {
  const {
    alstromeria,
    getAlstromeria,
    loader,
    errorMessage,
    notProductsMessage,
    query,
  } = useContext(FlowersContext);

  useEffect(() => {
    getAlstromeria();
    // eslint-disable-next-line
  }, [])

  const queryAlstromeria = useMemo(() => {
    const filterHeadChrys = query
      ? alstromeria.filter(item => item.name.trim().toLowerCase().includes(query.trim().toLowerCase()))
      : alstromeria;

      return filterHeadChrys;
  }, [query, alstromeria]);

  return (
    <section className="flowers-page">
      <div className="container">
        <div className="flowers-page__content">
          <h2 className="flowers-page__title App__title">
            Альстромерія
          </h2>

          <h3 className="flowers-page__count-sorts">
            {`${alstromeria.length} сортів`}
          </h3>

          {
            loader && (
              <Loader />
            )
          }

          {
            !loader && errorMessage && (
              <h1>{errorMessage}</h1>
            )
          }

          {
            notProductsMessage && (
              <h1>{notProductsMessage}</h1>
            )
          }

          {
            !queryAlstromeria.length && (
              <h1>Нічого не знайдено</h1>
            )
          }

          {
            !errorMessage && !loader && !!queryAlstromeria.length && (
              <ProductsList products={queryAlstromeria} />
            )
          }
        </div>
      </div>
    </section>
  );
}
